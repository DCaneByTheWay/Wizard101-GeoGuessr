import { rerenderMarkers, setLastNonGoofyMarkerSrc, enabledArcs, enabledWorlds, startRound,} from "./GameController.js";
import { ArcID, arcs } from "./WorldData.js";
import { setZoomSpeed } from "./ZoomController.js";

const settingsGear = document.getElementById("settings-gear");
const settingsDialog = document.getElementById("settings-dialog") as HTMLDialogElement;
const settingsCloseButton = document.getElementById("settings-close-button");
const markSkinButton = document.getElementById("mark-skin-button");
const markSkinDialogElement = document.getElementById("mark-skin-dialog") as HTMLDialogElement;
const zoomSpeedSlider = document.getElementById("zoom-slider");
const markSkinDialogCloseButton = document.getElementById("mark-skin-dialog-close-button");
const arc1Checkbox = document.getElementById("arc1-checkbox") as HTMLInputElement;
const sideArcCheckbox = document.getElementById("sidearc-checkbox") as HTMLInputElement;
const arc2Checkbox = document.getElementById("arc2-checkbox") as HTMLInputElement;
const arc3Checkbox = document.getElementById("arc3-checkbox") as HTMLInputElement;
const updateSelectedArcsSubmitButton = document.getElementById("arc-select-submit-button");
updateSelectedArcsSubmitButton!.style.display = "none";

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

function updateSelectedArcs(): void {

    // if no arcs are checked, do nothing and update button text to alert user
    if (
        !(arc1Checkbox!.checked || 
        arc2Checkbox!.checked || 
        arc3Checkbox!.checked ||
        sideArcCheckbox!.checked)
    ){
        updateSelectedArcsSubmitButton!.textContent = 'Select some worlds to play!'
        return
    }


    updateSelectedArcsSubmitButton!.style.display = "none";
    enabledArcs[ArcID.ARC_1] = arc1Checkbox!.checked;
    enabledArcs[ArcID.ARC_2] = arc2Checkbox!.checked;
    enabledArcs[ArcID.SIDE_ARC] = sideArcCheckbox!.checked;
    //enabledArcs[ArcID.ARC_3] = arc3Checkbox!.checked
    
    enabledWorlds.clear();

    for (const arc of arcs) {
        if (enabledArcs[arc.name]) {
            for (const world of arc.worlds) {
                enabledWorlds.add(world);
            }
        }
    }
    
    //console.log(enabledArcs)

    // start new round with new arc settings
    startRound();
}

function showUpdateSelectedArcsSubmitButton(): void {
    // if hidden, reveal button
    if (updateSelectedArcsSubmitButton!.style.display === "none")
        updateSelectedArcsSubmitButton!.style.display = "inline-block";
    
    // confirm button text
    if (updateSelectedArcsSubmitButton!.textContent != "Update Selected Arcs")
        updateSelectedArcsSubmitButton!.textContent = "Update Selected Arcs"
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
updateSelectedArcsSubmitButton!.onclick = updateSelectedArcs;
arc1Checkbox!.onclick = showUpdateSelectedArcsSubmitButton
sideArcCheckbox!.onclick = showUpdateSelectedArcsSubmitButton
arc2Checkbox!.onclick = showUpdateSelectedArcsSubmitButton
arc3Checkbox!.onclick = showUpdateSelectedArcsSubmitButton