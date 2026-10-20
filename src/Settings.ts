import { rerenderMarkers, setLastNonGoofyMarkerSrc, enabledWorlds, startRound,} from "./GameController.js";
import { ArcID, arcs } from "./WorldData.js";
import { setZoomSpeed } from "./ZoomController.js";

const settingsGear = document.getElementById("settings-gear");
const settingsDialog = document.getElementById("settings-dialog") as HTMLDialogElement;
const settingsCloseButton = document.getElementById("settings-close-button");
const markSkinButton = document.getElementById("mark-skin-button");
const markSkinDialogElement = document.getElementById("mark-skin-dialog") as HTMLDialogElement;
const zoomSpeedSlider = document.getElementById("zoom-slider");
const markSkinDialogCloseButton = document.getElementById("mark-skin-dialog-close-button");
const worldCheckboxes = document.querySelectorAll<HTMLInputElement>("input[data-world]");
const arcCheckboxes = document.querySelectorAll<HTMLInputElement>("input[data-arc]");
const updateSelectedArcsSubmitButton = document.getElementById("arc-select-submit-button");
updateSelectedArcsSubmitButton!.style.display = "none";
updateSelectedArcsSubmitButton!.style.userSelect = 'none';   
let spamCount = 0; // temporary (surely) tubermover QA precaution

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

function updateSelectedDifficulties(): boolean {
    return true
}

function updateSelectedWorlds(): boolean {

    // get selected worlds from checkboxes
    const selectedWorlds = Array.from(worldCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.dataset.world!);


    // if no worlds are selected, do nothing and update button text to alert user
    if (selectedWorlds.length == 0){
        updateSelectedArcsSubmitButton!.textContent = "Select some worlds to play!"


        // temp tubermover QA precaution
        spamCount++;

        if (spamCount >= 50) {
            updateSelectedArcsSubmitButton!.textContent = "Tubermover"
        }
        if (spamCount >= 57) {
            updateSelectedArcsSubmitButton!.style.fontSize = `${spamCount - 41}px`
        }
        if (spamCount == 80) {
            updateSelectedArcsSubmitButton!.style.background = "red"
        }
        if (spamCount >= 150) {
            window.location.href = "https://www.youtube.com/shorts/2A7nINfgxfc";
        }
        return false
    }
    
    // hide button
    updateSelectedArcsSubmitButton!.style.display = "none";
    
    // empty and repopulate enabled worlds
    enabledWorlds.clear();
    selectedWorlds.forEach(world => enabledWorlds.add(world))

    // return success
    return true
    
    //console.log(enabledWorlds)
}

function updateSettings(): void {

    const success = updateSelectedWorlds() && updateSelectedDifficulties();

    // if both successful, start new round with new applied settings
    if (success)
        startRound();
}

function showUpdateSelectedArcsSubmitButton(): void {
    // if hidden, reveal button
    if (updateSelectedArcsSubmitButton!.style.display === "none")
        updateSelectedArcsSubmitButton!.style.display = "inline-block";
    
    // confirm button text
    if (updateSelectedArcsSubmitButton!.textContent != "Update Settings")
        updateSelectedArcsSubmitButton!.textContent = "Update Settings"
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
updateSelectedArcsSubmitButton!.onclick = updateSettings;
worldCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("change", showUpdateSelectedArcsSubmitButton)
});

const worldCheckboxByClass = new Map(
    Array.from(worldCheckboxes, checkbox => [
        checkbox.dataset.world,
        checkbox,
    ])
);

// check / uncheck all checkboxes under arc
arcCheckboxes.forEach(arcCheckbox => {
    arcCheckbox.addEventListener("change", () => {
        const arc = arcs.find(({ name }) => name === arcCheckbox.dataset.arc);

        if (!arc) {
            throw new Error(`No arc found for "${arcCheckbox.dataset.arc}"`);
        }

        for (const worldClass of arc.worlds) {
            const worldCheckbox = worldCheckboxByClass.get(worldClass);

            if (!worldCheckbox) {
                throw new Error(`No checkbox found for world "${worldClass}"`);
            }

            worldCheckbox.checked = arcCheckbox.checked;
        }

        showUpdateSelectedArcsSubmitButton();
    });
});