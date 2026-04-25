import { rerenderMarkers, setLastNonGoofyMarkerSrc } from "./GameController.js";
import { setZoomSpeed } from "./ZoomController.js";

const settingsGear = document.getElementById("settings-gear");
const settingsDialog = document.getElementById("settings-dialog") as HTMLDialogElement;
const settingsCloseButton = document.getElementById("settings-close-button");
const markSkinButton = document.getElementById("mark-skin-button");
const markSkinDialogElement = document.getElementById("mark-skin-dialog") as HTMLDialogElement;
const zoomSpeedSlider = document.getElementById("zoom-slider");
const markSkinDialogCloseButton = document.getElementById("mark-skin-dialog-close-button");

const DEFAULT_MARK_SRC = "./Images/Markers/(Icon)_Place_Mark.png";
export let currentMarkSrc = DEFAULT_MARK_SRC;

markSkinButton?.addEventListener("click", () => (markSkinDialogElement as HTMLDialogElement).showModal());
markSkinDialogCloseButton?.addEventListener("click", () => (markSkinDialogElement as HTMLDialogElement).close());

export function setMarkSrc(newMarkSrc: string): void {
    currentMarkSrc = newMarkSrc;
    setLastNonGoofyMarkerSrc(newMarkSrc);
}

export function setMarkSkinButtonSrc(newMarkSrc: string): void {
    (markSkinButton as HTMLImageElement).src = newMarkSrc;
}

document.querySelectorAll(".mark-skin-option").forEach((img) => {
    img.addEventListener("click", () => {
        const newSrc = (img as HTMLImageElement).src;
        setMarkSrc(newSrc);
        setMarkSkinButtonSrc(newSrc);
        markSkinDialogElement.close();
        rerenderMarkers();
    });
});

zoomSpeedSlider?.addEventListener("input", () => {
    const slider = zoomSpeedSlider as HTMLInputElement;
    setZoomSpeed(parseFloat(slider.value));
})

settingsGear?.addEventListener("click", () => settingsDialog.showModal());
settingsCloseButton?.addEventListener("click", () => settingsDialog.close());