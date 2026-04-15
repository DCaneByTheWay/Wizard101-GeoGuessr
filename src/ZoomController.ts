import { World, Area } from "./WorldData.js";
import { render } from "./Renderer.js";

export enum ZoomLevel {
    SPIRAL = 0,
    WORLD = 1,
    AREA = 2,
}

let currentLevel = ZoomLevel.SPIRAL;
let currentWorld: World | null = null;
let currentArea: Area | null = null;
let hoveredElement: HTMLElement | null = null;
let scrollAccumulator = 0;

const SCROLL_THRESHOLD = 300;

export function init(container: HTMLElement, worlds: World[]): void {
    // Track what the user is hovering over
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

    // Scroll to zoom in/out
    container.addEventListener("wheel", (e) => {
        e.preventDefault();
        scrollAccumulator += e.deltaY;

        if (scrollAccumulator < -SCROLL_THRESHOLD) {
            zoomIn(container, worlds);
            scrollAccumulator = 0;
        } else if (scrollAccumulator > SCROLL_THRESHOLD) {
            zoomOut(container, worlds);
            scrollAccumulator = 0;
        }
    });

    // Initial render
    render(container, currentLevel, worlds, currentWorld, currentArea);
}

function zoomIn(container: HTMLElement, worlds: World[]): void {
    if (currentLevel === ZoomLevel.SPIRAL && hoveredElement) {
        const worldClass = hoveredElement.dataset.world;
        currentWorld = worlds.find(w => w.class === worldClass) ?? null;
        if (currentWorld) {
            currentLevel = ZoomLevel.WORLD;
        }
    } else if (currentLevel === ZoomLevel.WORLD && hoveredElement && currentWorld) {
        const areaName = hoveredElement.dataset.area;
        currentArea = currentWorld.areas.find(a => a.name === areaName) ?? null;
        if (currentArea) {
            currentLevel = ZoomLevel.AREA;
        }
    }

    render(container, currentLevel, worlds, currentWorld, currentArea);
}

function zoomOut(container: HTMLElement, worlds: World[]): void {
    if (currentLevel === ZoomLevel.AREA) {
        currentLevel = ZoomLevel.WORLD;
        currentArea = null;
    } else if (currentLevel === ZoomLevel.WORLD) {
        currentLevel = ZoomLevel.SPIRAL;
        currentWorld = null;
    }

    render(container, currentLevel, worlds, currentWorld, currentArea);
}

export function getCurrentLevel(): ZoomLevel {
    return currentLevel
}