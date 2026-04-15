const SPIRAL_SRC = "./Images/Spiral.png";
export function renderSpiral(container, worlds) {
    // background spiral image
    const spiralImg = document.createElement("img");
    spiralImg.src = SPIRAL_SRC;
    spiralImg.id = "SpiralImage";
    container.appendChild(spiralImg);
    // hitboxes for areas
    for (const world of worlds) {
        const worldImg = document.createElement("img");
        worldImg.src = world.iconSrc;
        worldImg.classList.add("world-icon", world.class);
        worldImg.dataset.world = world.class; // to detect on hover
        container.appendChild(worldImg);
    }
}
export function renderWorldMap(container, world) {
    // world map img
    const mapImg = document.createElement("img");
    mapImg.src = world.mapSrc;
    mapImg.id = "WorldMapImage";
    container.appendChild(mapImg);
    // invisible hotspot for areas on map img
    for (const area of world.areas) {
        const hotspot = document.createElement("div");
        hotspot.classList.add("area-hotspot");
        hotspot.dataset.area = area.name;
        hotspot.style.top = area.top;
        hotspot.style.left = area.left;
        hotspot.style.width = area.width;
        hotspot.style.height = area.height;
        container.appendChild(hotspot);
    }
}
export function renderArea(container, area) {
    // area img
    const areaImg = document.createElement("img");
    areaImg.src = area.imageSrc;
    areaImg.id = "AreaImage";
    container.appendChild(areaImg);
}
export function render(container, zoomlevel, worlds, currentWorld, currentArea) {
    container.innerHTML = "";
    if (zoomlevel === 0) {
        renderSpiral(container, worlds);
    }
    else if (zoomlevel === 1 && currentWorld) {
        renderWorldMap(container, currentWorld);
    }
    else if (zoomlevel === 2 && currentArea) {
        renderArea(container, currentArea);
    }
}
//# sourceMappingURL=Renderer.js.map