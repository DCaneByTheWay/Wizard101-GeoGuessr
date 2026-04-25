import { setZoomSpeed } from "./ZoomController.js";
const settingsGear = document.getElementById("settings-gear");
const settingsDialog = document.getElementById("settings-dialog");
const settingsCloseButton = document.getElementById("settings-close-button");
const markSkinButton = document.getElementById("mark-skin-button");
const markSkinDialogElement = document.getElementById("mark-skin-dialog");
const zoomSpeedSlider = document.getElementById("zoom-slider");
const markSkinDialogCloseButton = document.getElementById("mark-skin-dialog-close-button");
const DEFAULT_MARK_SRC = "./Images/Markers/(Icon)_Place_Mark.png";
export let currentMarkSrc = DEFAULT_MARK_SRC;
markSkinButton?.addEventListener("click", () => markSkinDialogElement.showModal());
markSkinDialogCloseButton?.addEventListener("click", () => markSkinDialogElement.close());
document.querySelectorAll(".mark-skin-option").forEach((img) => {
    img.addEventListener("click", () => {
        currentMarkSrc = img.src;
        markSkinButton.src = currentMarkSrc;
        markSkinDialogElement.close();
    });
});
zoomSpeedSlider?.addEventListener("input", () => {
    const slider = zoomSpeedSlider;
    setZoomSpeed(parseFloat(slider.value));
});
settingsGear?.addEventListener("click", () => settingsDialog.showModal());
settingsCloseButton?.addEventListener("click", () => settingsDialog.close());
//# sourceMappingURL=Settings.js.map