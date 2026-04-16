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
    const spiralMediumWidth = 810;
    const spiralMediumHeight = 720;
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
    const debugWorldName = "Krokotopia"; // change string to world name to debug
    const debugWorld = worlds.find(world => world.name === debugWorldName);
    setMapSize(MAP_SIZES.MEDIUM);
    render(container, 1, worlds, debugWorld, null);
}
//DebugWorldAreaBoarders();
//const debugBoarderButton = document.getElementById('debug-boarder-button');
//debugBoarderButton!.onclick = DebugWorldAreaBoarders;
container.onmouseenter = setMapSizeMedium;
container.onmouseleave = setMapSizeSmall;
//# sourceMappingURL=App.js.map