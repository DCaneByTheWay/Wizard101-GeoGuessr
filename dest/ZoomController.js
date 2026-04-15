import { render } from "./Renderer.js";
export var ZoomLevel;
(function (ZoomLevel) {
    ZoomLevel[ZoomLevel["SPIRAL"] = 0] = "SPIRAL";
    ZoomLevel[ZoomLevel["WORLD"] = 1] = "WORLD";
    ZoomLevel[ZoomLevel["AREA"] = 2] = "AREA";
})(ZoomLevel || (ZoomLevel = {}));
let currentLevel = ZoomLevel.SPIRAL;
let currentWorld = null;
let currentArea = null;
let hoveredElement = null;
let scrollAccumulator = 0;
const SCROLL_THRESHOLD = 300;
export function init(container, worlds) {
    // Track what the user is hovering over
    container.addEventListener("mouseover", (e) => {
        const target = e.target;
        if (target.classList.contains("world-icon") || target.classList.contains("area-hotspot")) {
            hoveredElement = target;
        }
    });
    container.addEventListener("mouseout", (e) => {
        const target = e.target;
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
        }
        else if (scrollAccumulator > SCROLL_THRESHOLD) {
            zoomOut(container, worlds);
            scrollAccumulator = 0;
        }
    });
    // Initial render
    render(container, currentLevel, worlds, currentWorld, currentArea);
}
function zoomIn(container, worlds) {
    if (currentLevel === ZoomLevel.SPIRAL && hoveredElement) {
        const worldClass = hoveredElement.dataset.world;
        currentWorld = worlds.find(w => w.class === worldClass) ?? null;
        if (currentWorld) {
            currentLevel = ZoomLevel.WORLD;
        }
    }
    else if (currentLevel === ZoomLevel.WORLD && hoveredElement && currentWorld) {
        const areaName = hoveredElement.dataset.area;
        currentArea = currentWorld.areas.find(a => a.name === areaName) ?? null;
        if (currentArea) {
            currentLevel = ZoomLevel.AREA;
        }
    }
    render(container, currentLevel, worlds, currentWorld, currentArea);
}
function zoomOut(container, worlds) {
    if (currentLevel === ZoomLevel.AREA) {
        currentLevel = ZoomLevel.WORLD;
        currentArea = null;
    }
    else if (currentLevel === ZoomLevel.WORLD) {
        currentLevel = ZoomLevel.SPIRAL;
        currentWorld = null;
    }
    render(container, currentLevel, worlds, currentWorld, currentArea);
}
export function getCurrentLevel() {
    return currentLevel;
}
//# sourceMappingURL=ZoomController.js.map