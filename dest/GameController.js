import { getLevelKey, getTransform } from "./ZoomController.js";
const images = [
    "WizardCity1",
    "WizardCity2",
    "WizardCity3",
    "WizardCity4",
    "WizardCity5",
    "WizardCity6",
    "WizardCity7",
    "Krokotopia1",
    "Krokotopia2",
    "Krokotopia3",
    "Krokotopia4",
    "Marleybone1",
    "Marleybone2",
    "Marleybone3",
    "Marleybone4",
    "Marleybone5",
    "Mooshu1",
    "Mooshu2",
    "Mooshu3",
    "Mooshu4",
    "Dragonspyre1",
    "Dragonspyre2",
    "Dragonspyre3",
    "Dragonspyre4",
    "Dragonspyre5",
    "Dragonspyre6",
    "Dragonspyre7"
];
const markerSize = 30;
const imageElement = document.getElementById("guess-image");
const imageWrapper = imageElement?.parentElement;
// disable drag on spiral and children
imageElement.ondragstart = () => false;
const container = document.getElementById("Spiral");
container.addEventListener("click", placeMarker);
let pointerDownPos = null;
const DRAG_THRESHOLD = 5; // pixels of drag
container.addEventListener("pointerdown", (e) => {
    pointerDownPos = { x: e.clientX, y: e.clientY };
});
const MARKER_SRC = "./Images/Icons/(Icon)_Hat.png";
let savedMarker = null;
export function setBackgroundImage(src) {
    if (imageElement) {
        imageWrapper?.classList.add("spinner-container");
        imageWrapper?.classList.remove("loaded");
        imageElement.onload = () => {
            imageWrapper?.classList.add("loaded");
        };
        imageElement.src = src;
    }
}
export function startRound(imgSrc) {
    setBackgroundImage(imgSrc);
    // TODO: add actual game logic
}
export function getRandomImagePath() {
    const randomImg = images[Math.floor(Math.random() * images.length)];
    return `Images/GuessImages/${randomImg}.png`;
}
export function placeMarker(e) {
    // return early if dragging map
    if (pointerDownPos) {
        const dx = e.clientX - pointerDownPos.x;
        const dy = e.clientY - pointerDownPos.y;
        if (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD) {
            return;
        }
    }
    // return early if map is not rendered yet
    const spiralContent = document.getElementById("spiral-content");
    if (!spiralContent)
        return;
    const markerElement = spiralContent.querySelector(".marker");
    const rect = container.getBoundingClientRect();
    const { scale, tx, ty } = getTransform();
    // convert screen coords to content coords then to percenteges
    const contentX = (e.clientX - rect.left - tx) / scale;
    const contentY = (e.clientY - rect.top - ty) / scale;
    const xPercent = (contentX / rect.width) * 100;
    const yPercent = (contentY / rect.height) * 100;
    if (markerElement) {
        markerElement.style.left = xPercent + "%";
        markerElement.style.top = yPercent + "%";
    }
    else {
        const marker = document.createElement("img");
        marker.style.pointerEvents = "none";
        marker.src = MARKER_SRC;
        marker.classList.add("marker");
        marker.style.position = "absolute";
        marker.style.width = markerSize + "px";
        marker.style.height = markerSize + "px";
        // center on click, counter-scale to stay fixed size
        marker.style.transform = `translate(-50%, -50%) scale(${1 / scale})`;
        marker.style.left = xPercent + "%";
        marker.style.top = yPercent + "%";
        spiralContent.appendChild(marker);
        // update last mark
        savedMarker = { key: getLevelKey(), xPercent, yPercent };
    }
}
export function saveMarker() {
    const spiralContent = document.getElementById("spiral-content");
    const markerElement = spiralContent?.querySelector(".marker");
    if (markerElement) {
        savedMarker = {
            key: getLevelKey(),
            xPercent: parseFloat(markerElement.style.left),
            yPercent: parseFloat(markerElement.style.top)
        };
    }
}
export function restoreMarker() {
    const spiralContent = document.getElementById("spiral-content");
    // return if a marker has not been placed yet
    if (!spiralContent || !savedMarker)
        return;
    // return if marker belongs to a different map level
    if (savedMarker.key !== getLevelKey())
        return;
    const { scale } = getTransform();
    const marker = document.createElement("img");
    marker.style.pointerEvents = "none";
    marker.src = MARKER_SRC;
    marker.classList.add("marker");
    marker.style.position = "absolute";
    marker.style.width = markerSize + "px";
    marker.style.height = markerSize + "px";
    // center on click, counter-scale to stay fixed size
    marker.style.transform = `translate(-50%, -50%) scale(${1 / scale})`;
    marker.style.left = savedMarker.xPercent + "%";
    marker.style.top = savedMarker.yPercent + "%";
    spiralContent.appendChild(marker);
}
//# sourceMappingURL=GameController.js.map