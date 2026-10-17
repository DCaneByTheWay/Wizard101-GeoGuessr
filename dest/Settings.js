import { rerenderMarkers, setLastNonGoofyMarkerSrc, enabledArcs, enabledWorlds, } from "./GameController.js";
import { ArcID, arcs } from "./WorldData.js";
import { setZoomSpeed } from "./ZoomController.js";
const settingsGear = document.getElementById("settings-gear");
const settingsDialog = document.getElementById("settings-dialog");
const settingsCloseButton = document.getElementById("settings-close-button");
const markSkinButton = document.getElementById("mark-skin-button");
const markSkinDialogElement = document.getElementById("mark-skin-dialog");
const zoomSpeedSlider = document.getElementById("zoom-slider");
const markSkinDialogCloseButton = document.getElementById("mark-skin-dialog-close-button");
const arc1Checkbox = document.getElementById("arc1-checkbox");
const sideArcCheckbox = document.getElementById("sidearc-checkbox");
const arc2Checkbox = document.getElementById("arc2-checkbox");
const arc3Checkbox = document.getElementById("arc3-checkbox");
const updateSelectedArcsSubmitButton = document.getElementById("arc-select-submit-button");
updateSelectedArcsSubmitButton.style.display = "none";
const DEFAULT_MARK_SRC = "./Images/Markers/(Icon)_Place_Mark.png";
export let currentMarkSrc = DEFAULT_MARK_SRC;
markSkinButton?.addEventListener("click", () => markSkinDialogElement.showModal());
markSkinDialogCloseButton?.addEventListener("click", () => markSkinDialogElement.close());
export function setMarkSrc(newMarkSrc) {
    currentMarkSrc = newMarkSrc;
    setLastNonGoofyMarkerSrc(newMarkSrc);
}
export function setMarkSkinButtonSrc(newMarkSrc) {
    markSkinButton.src = newMarkSrc;
}
function updateSelectedArcs() {
    console.log(`1 ${arc1Checkbox.checked}`);
    console.log(`side ${sideArcCheckbox.checked}`);
    console.log(`2 ${arc2Checkbox.checked}`);
    updateSelectedArcsSubmitButton.style.display = "none";
    enabledArcs[ArcID.ARC_1] = arc1Checkbox.checked;
    enabledArcs[ArcID.ARC_2] = arc2Checkbox.checked;
    enabledArcs[ArcID.SIDE_ARC] = sideArcCheckbox.checked;
    //enabledArcs[ArcID.ARC_3] = arc3Checkbox!.checked
    enabledWorlds.clear();
    for (const arc of arcs) {
        if (enabledArcs[arc.name]) {
            for (const world of arc.worlds) {
                enabledWorlds.add(world);
            }
        }
    }
    console.log(enabledArcs);
}
function showUpdateSelectedArcsSubmitButton() {
    if (updateSelectedArcsSubmitButton.style.display === "none")
        updateSelectedArcsSubmitButton.style.display = "inline-block";
}
document.querySelectorAll(".mark-skin-option").forEach((img) => {
    img.addEventListener("click", () => {
        const newSrc = img.src;
        setMarkSrc(newSrc);
        setMarkSkinButtonSrc(newSrc);
        markSkinDialogElement.close();
        rerenderMarkers();
    });
});
zoomSpeedSlider?.addEventListener("input", () => {
    const slider = zoomSpeedSlider;
    setZoomSpeed(parseFloat(slider.value));
});
settingsGear?.addEventListener("click", () => settingsDialog.showModal());
settingsCloseButton?.addEventListener("click", () => settingsDialog.close());
updateSelectedArcsSubmitButton.onclick = updateSelectedArcs;
arc1Checkbox.onclick = showUpdateSelectedArcsSubmitButton;
sideArcCheckbox.onclick = showUpdateSelectedArcsSubmitButton;
arc2Checkbox.onclick = showUpdateSelectedArcsSubmitButton;
arc3Checkbox.onclick = showUpdateSelectedArcsSubmitButton;
//# sourceMappingURL=Settings.js.map