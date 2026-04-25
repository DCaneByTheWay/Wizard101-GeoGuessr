import { World, Area } from "./WorldData.js";
import { render } from "./Renderer.js";
import { saveMarker, restoreMarker } from "./GameController.js";

export enum ZoomLevel {
    SPIRAL = 0,
    WORLD = 1,
    AREA = 2,
}

let currentLevel = ZoomLevel.SPIRAL;
let currentWorld: World | null = null;
let currentArea: Area | null = null;
let hoveredElement: HTMLElement | null = null;

let currentScale = 1.0;
let translateX = 0;
let translateY = 0;
const MIN_SCALE = 1.0;
const MAX_SCALE = 1.75;
const DEFAULT_ZOOM_SPEED = 0.05;
let currentZoomSpeed = DEFAULT_ZOOM_SPEED;
let zoomInTicks = 0;
let zoomOutTicks = 0;
let requiresZoomInThreshold = false;
const ZOOM_IN_THRESHOLD = 5;
const ZOOM_OUT_THRESHOLD = 10;

export function init(container: HTMLElement, worlds: World[]): void {
    // track what the user is hovering over
    container.addEventListener("mouseover", (e) => {
        const target = e.target as HTMLElement;
        if (target.classList.contains("world-icon") || target.classList.contains("area-hotspot")) {
            hoveredElement = target;
        }
    });

    container.addEventListener("mouseout", (e) => {
        const target = e.target as HTMLElement;
        if (target === hoveredElement) {
            hoveredElement = null;
        }
    });

    // scroll to zoom in/out
    container.addEventListener("wheel", (e) => {
        e.preventDefault();
        const direction = e.deltaY > 0 ? -1 : 1;
        const oldScale = currentScale;

        // After entering a deeper map level, require a few "zoom in" ticks
        // before the map starts scaling at that new level.
        if (direction > 0 && currentScale === MIN_SCALE && requiresZoomInThreshold) {
            zoomOutTicks = 0;
            zoomInTicks++;
            if (zoomInTicks < ZOOM_IN_THRESHOLD) {
                applyTransform();
                return;
            }
            zoomInTicks = 0;
            requiresZoomInThreshold = false;
        }

        let newScale = currentScale + direction * currentZoomSpeed;

        if (newScale >= MAX_SCALE) {
            currentScale = MAX_SCALE;
            zoomOutTicks = 0;
            zoomInTicks = 0;

            if (zoomIn(container, worlds)) {
                currentScale = 1.0;
                translateX = 0;
                translateY = 0;
                requiresZoomInThreshold = true;
            } else if (oldScale < MAX_SCALE) {
                adjustTranslate(container, oldScale, e);
            }
        } else if (newScale <= MIN_SCALE) {
            zoomInTicks = 0;
            currentScale = MIN_SCALE;
            zoomOutTicks++;
            if (zoomOutTicks >= ZOOM_OUT_THRESHOLD) {
                zoomOutTicks = 0;
                // keep track of previous map
                const prevWorld = currentWorld;
                const prevArea = currentArea;
                if (zoomOut(container, worlds)) {
                    currentScale = MAX_SCALE;
                    translateX = 0;
                    translateY = 0;
                    // center on the element we just zoomed out from
                    if (prevArea && currentLevel === ZoomLevel.WORLD) {
                        centerOnTarget(container, `[data-area="${prevArea.name}"]`);
                    } else if (prevWorld && currentLevel === ZoomLevel.SPIRAL) {
                        centerOnTarget(container, `.${prevWorld.class}`);
                    }
                }
            } else {
                translateX = 0;
                translateY = 0;
            }
        } else {
            zoomInTicks = 0;
            zoomOutTicks = 0;
            currentScale = newScale;
            adjustTranslate(container, oldScale, e);
        }
        
        applyTransform();
    });

    // click and drag to pan while zoomed in
    let isDragging = false;
    let dragStartX = 0;
    let dragStartY = 0;
    let dragStartTX = 0;
    let dragStartTY = 0;

    container.addEventListener("mousedown", (e) => {
        if (currentScale > MIN_SCALE) {
            isDragging = true;
            dragStartX = e.clientX;
            dragStartY = e.clientY;
            dragStartTX = translateX;
            dragStartTY = translateY;
            container.style.cursor = "grabbing";
            const inner = document.getElementById("spiral-content");
            if (inner) inner.style.transition = "none";
        }
    });

    window.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        const dx = e.clientX - dragStartX;
        const dy = e.clientY - dragStartY;
        translateX = dragStartTX + dx;
        translateY = dragStartTY + dy;

        // clamp so content stays in bounds
        const rect = container.getBoundingClientRect();
        const minTX = rect.width - rect.width * currentScale;
        const minTY = rect.height - rect.height * currentScale;
        translateX = Math.min(0, Math.max(minTX, translateX));
        translateY = Math.min(0, Math.max(minTY, translateY));

        applyTransform();
    });

    window.addEventListener("mouseup", () => {
        if (isDragging) {
            isDragging = false;
            container.style.cursor = "";
            const inner = document.getElementById("spiral-content");
            if (inner) inner.style.transition = "";
        }
    });

    // Initial render
    render(container, currentLevel, worlds, currentWorld, currentArea);
}

function adjustTranslate(container: HTMLElement, oldScale: number, e: WheelEvent): void {
    const rect = container.getBoundingClientRect();
    // Mouse position relative to the container (0 to 1)
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Point on the content under the cursor before zoom
    const contentX = (mouseX - translateX) / oldScale;
    const contentY = (mouseY - translateY) / oldScale;

    // New translate so the same content point stays under the cursor
    translateX = mouseX - contentX * currentScale;
    translateY = mouseY - contentY * currentScale;

    // Clamp so content doesn't go out of bounds
    const maxTranslateX = 0;
    const maxTranslateY = 0;
    const minTranslateX = rect.width - rect.width * currentScale;
    const minTranslateY = rect.height - rect.height * currentScale;

    translateX = Math.min(maxTranslateX, Math.max(minTranslateX, translateX));
    translateY = Math.min(maxTranslateY, Math.max(minTranslateY, translateY));
}

function centerOnTarget(container: HTMLElement, targetSelector: string): void {
    const inner = document.getElementById("spiral-content");
    const el = inner?.querySelector(targetSelector) as HTMLElement | null;
    if (!el || !inner) return;

    const rect = container.getBoundingClientRect();

    // Element center in content (unscaled) coordinates
    const elCenterX = el.offsetLeft + el.offsetWidth / 2;
    const elCenterY = el.offsetTop + el.offsetHeight / 2;

    // Translate so element center aligns with container center
    translateX = rect.width / 2 - elCenterX * currentScale;
    translateY = rect.height / 2 - elCenterY * currentScale;

    // Clamp so content stays in bounds
    const minTranslateX = rect.width - rect.width * currentScale;
    const minTranslateY = rect.height - rect.height * currentScale;
    translateX = Math.min(0, Math.max(minTranslateX, translateX));
    translateY = Math.min(0, Math.max(minTranslateY, translateY));
}

function applyTransform(): void {
    const inner = document.getElementById("spiral-content");
    if (inner) {
        inner.style.transformOrigin = "0 0";
        inner.style.transform = `translate(${translateX}px, ${translateY}px) scale(${currentScale})`;

        inner.querySelectorAll(".marker, .answer-marker").forEach((marker) => {
            (marker as HTMLElement).style.transform = `translate(-50%, -50%) scale(${1 / currentScale})`;
        });
    }
}

let savedScale = 1.0;
let savedTX = 0;
let savedTY = 0;

export function saveAndScaleTransform(sizeRatio: number): void {
    savedScale = currentScale;
    savedTX = translateX;
    savedTY = translateY;
    // Scale translate proportionally to the new container size
    translateX *= sizeRatio;
    translateY *= sizeRatio;
    applyTransform();
}

export function restoreTransform(): void {
    currentScale = savedScale;
    translateX = savedTX;
    translateY = savedTY;
    applyTransform();
}

function zoomIn(container: HTMLElement, worlds: World[]): boolean {
    if (currentLevel === ZoomLevel.SPIRAL && hoveredElement) {
        const worldClass = hoveredElement.dataset.world;
        const world = worlds.find(w => w.class === worldClass) ?? null;
        if (world) {
            saveMarker();
            currentWorld = world;
            currentLevel = ZoomLevel.WORLD;
            render(container, currentLevel, worlds, currentWorld, currentArea);
            restoreMarker();
            return true;
        }
    } else if (currentLevel === ZoomLevel.WORLD && hoveredElement && currentWorld) {
        const areaName = hoveredElement.dataset.area;
        const area = currentWorld.areas.find(a => a.name === areaName) ?? null;
        if (area) {
            saveMarker();
            currentArea = area;
            currentLevel = ZoomLevel.AREA;
            render(container, currentLevel, worlds, currentWorld, currentArea);
            restoreMarker();
            return true;
        }
    }

    return false;
}

function zoomOut(container: HTMLElement, worlds: World[]): boolean {
    if (currentLevel === ZoomLevel.AREA) {
        saveMarker();
        currentLevel = ZoomLevel.WORLD;
        currentArea = null;
        render(container, currentLevel, worlds, currentWorld, currentArea);
        restoreMarker();
        return true;
    } else if (currentLevel === ZoomLevel.WORLD) {
        saveMarker();
        currentLevel = ZoomLevel.SPIRAL;
        currentWorld = null;
        render(container, currentLevel, worlds, currentWorld, currentArea);
        restoreMarker();
        return true;
    }

    return false;
}

export function getCurrentLevel(): ZoomLevel {
    return currentLevel
}

export function getLevelKey(): string {
    if (currentLevel === ZoomLevel.WORLD && currentWorld) {
        return `world:${currentWorld.class}`;
    }
    if (currentLevel === ZoomLevel.AREA && currentWorld && currentArea) {
        return `area:${currentWorld.class}:${currentArea.name}`;
    }
    return "spiral";
}

export function getTransform(): { scale: number; tx: number; ty: number } {
    return { scale: currentScale, tx: translateX, ty: translateY };
}

/** Resets map to spiral level */
export function resetToSpiral(container: HTMLElement, worlds: World[]): void {
    currentLevel = ZoomLevel.SPIRAL;
    currentWorld = null;
    currentArea = null;
    currentScale = 1.0;
    translateX = 0;
    translateY = 0;
    zoomInTicks = 0;
    zoomOutTicks = 0;
    requiresZoomInThreshold = false;
    hoveredElement = null;

    // Clear cached resize transform so mouse-enter cannot restore stale zoom.
    savedScale = 1.0;
    savedTX = 0;
    savedTY = 0;

    render(container, currentLevel, worlds, currentWorld, currentArea);
    applyTransform();
}

export function setZoomSpeed(newZoomSpeed: number): void {
    currentZoomSpeed = newZoomSpeed;
}