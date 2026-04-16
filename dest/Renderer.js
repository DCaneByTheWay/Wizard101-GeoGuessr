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
        hotspot.append(area.name);
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
    // Inner wrapper so we can scale content without scaling the container/border
    const inner = document.createElement("div");
    inner.id = "spiral-content";
    container.appendChild(inner);
    container.classList.add("spinner-container");
    container.classList.remove("loaded");
    const onMainImageLoad = () => {
        container.classList.add("loaded");
    };
    if (zoomlevel === 0) {
        renderSpiral(inner, worlds);
        const img = inner.querySelector("#SpiralImage");
        if (img?.complete)
            onMainImageLoad();
        else
            img?.addEventListener("load", onMainImageLoad);
    }
    else if (zoomlevel === 1 && currentWorld) {
        renderWorldMap(inner, currentWorld);
        const img = inner.querySelector("#WorldMapImage");
        if (img?.complete)
            onMainImageLoad();
        else
            img?.addEventListener("load", onMainImageLoad);
    }
    else if (zoomlevel === 2 && currentArea) {
        renderArea(inner, currentArea);
        const img = inner.querySelector("#AreaImage");
        if (img?.complete)
            onMainImageLoad();
        else
            img?.addEventListener("load", onMainImageLoad);
    }
}
//# sourceMappingURL=Renderer.js.map