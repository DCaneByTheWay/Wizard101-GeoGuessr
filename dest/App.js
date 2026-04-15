import { init } from "./ZoomController.js";
import { worlds } from "./WorldData.js";
import { render } from "./Renderer.js";
const container = document.getElementById("Spiral");
// disable drag on spiral and children
container.ondragstart = () => false;
init(container, worlds);
var MAP_SIZES;
(function (MAP_SIZES) {
    MAP_SIZES[MAP_SIZES["SMALL"] = 1] = "SMALL";
    MAP_SIZES[MAP_SIZES["MEDIUM"] = 2] = "MEDIUM";
    MAP_SIZES[MAP_SIZES["LARGE"] = 3] = "LARGE";
})(MAP_SIZES || (MAP_SIZES = {}));
var currentMapSize = MAP_SIZES.MEDIUM;
/** Given MAP_SIZE enum value, changes size of spiral and world icons */
function setMapSize(mapSize) {
    // vars for both spiral and world-icon css properties
    const SCALE_FACTOR = 3;
    const spiralMediumWidth = 905;
    const spiralMediumHeight = 647;
    const worldIconsMediumWidth = 85;
    const worldIconsMediumHeight = 85;
    // get root to access and modify data
    const root = document.documentElement;
    // get scale and opacity depending on map size
    const scale = mapSize === MAP_SIZES.SMALL ? (1 / SCALE_FACTOR) : 1;
    const opacity = mapSize === MAP_SIZES.SMALL ? "30%" : "100%";
    // change properties of spiral and world icons
    root.style.setProperty("--spiral-width", `${spiralMediumWidth * scale}px`);
    root.style.setProperty("--spiral-height", `${spiralMediumHeight * scale}px`);
    root.style.setProperty("--world-icons-width", `${worldIconsMediumWidth * scale}px`);
    root.style.setProperty("--world-icons-height", `${worldIconsMediumHeight * scale}px`);
    // change opacity of spiral
    root.style.setProperty("--spiral-opacity", opacity);
    currentMapSize = mapSize;
}
/** Toggles map between sizes */
function toggleMapSize() {
    if (currentMapSize == MAP_SIZES.SMALL) {
        setMapSize(MAP_SIZES.MEDIUM);
    }
    else {
        setMapSize(MAP_SIZES.SMALL);
    }
}
/** Sets map size to medium */
function setMapSizeMedium() {
    setMapSize(MAP_SIZES.MEDIUM);
}
/** Sets map size to small */
function setMapSizeSmall() {
    setMapSize(MAP_SIZES.SMALL);
}
/** Function to be used to debug boarders */
function DebugWorldAreaBoarders() {
    let debugWorlds = [{
            name: "Wizard City",
            class: "wizard-city",
            iconSrc: "./Images/WorldIcons/(Icon)_Wizard_City.png",
            mapSrc: "./Images/Maps/WizardCity/WizardCity.png",
            // TODO: make top/left values be real (they are not real yet)
            areas: [
                { name: "Colossus Boulevard", imageSrc: "./Images/Maps/WizardCity/ColossusBoulevard.png", top: "51%", left: "69%", width: "16%", height: "11%" },
                { name: "Cyclops Lane", imageSrc: "./Images/Maps/WizardCity/CyclopsLane.png", top: "45%", left: "21%", width: "13%", height: "12%" },
                { name: "Dark Cave", imageSrc: "./Images/Maps/WizardCity/DarkCave.png", top: "64%", left: "30%", width: "10%", height: "12%" },
                { name: "Dark Cave", imageSrc: "./Images/Maps/WizardCity/DarkCave.png", top: "77%", left: "47%", width: "10%", height: "12%" },
                { name: "Firecat Alley", imageSrc: "./Images/Maps/WizardCity/FirecatAlley.png", top: "72%", left: "60%", width: "12%", height: "11%" },
                { name: "Golem Court", imageSrc: "./Images/Maps/WizardCity/GolemCourt.png", top: "22%", left: "34%", width: "11%", height: "12%" },
                { name: "Haunted Cave", imageSrc: "./Images/Maps/WizardCity/HauntedCave.png", top: "75%", left: "5%", width: "14%", height: "12%" },
                { name: "Nightside", imageSrc: "./Images/Maps/WizardCity/Nightside.png", top: "34%", left: "26%", width: "14%", height: "8%" },
                { name: "Olde Town", imageSrc: "./Images/Maps/WizardCity/OldeTown.png", top: "44%", left: "38%", width: "10%", height: "12%" },
                { name: "Pet Pavilion", imageSrc: "./Images/Maps/WizardCity/PetPavilion.png", top: "21%", left: "70%", width: "13%", height: "12%" },
                { name: "Ravenwood", imageSrc: "./Images/Maps/WizardCity/Ravenwood.png", top: "15%", left: "50%", width: "16%", height: "7%" },
                { name: "Shopping District", imageSrc: "./Images/Maps/WizardCity/ShoppingDistrict.png", top: "47%", left: "51%", width: "15%", height: "12%" },
                { name: "The Commons", imageSrc: "./Images/Maps/WizardCity/TheCommons.png", top: "27%", left: "48%", width: "20%", height: "13%" },
                { name: "Triton Avenue", imageSrc: "./Images/Maps/WizardCity/TritonAvenue.png", top: "80%", left: "28%", width: "15%", height: "13%" },
                { name: "Unicorn Way", imageSrc: "./Images/Maps/WizardCity/UnicornWay.png", top: "33%", left: "76%", width: "13%", height: "12%" },
            ]
        }];
    setMapSize(MAP_SIZES.MEDIUM);
    render(container, 1, worlds, debugWorlds[0], null);
}
//DebugWorldAreaBoarders();
//let debugBoarderButton = document.getElementById('debug-boarder-button');
//debugBoarderButton!.onclick = DebugWorldAreaBoarders;
container.onmouseenter = setMapSizeMedium;
container.onmouseleave = setMapSizeSmall;
//# sourceMappingURL=App.js.map