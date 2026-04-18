import { init, saveAndScaleTransform, restoreTransform } from "./ZoomController.js";
import { worlds } from "./WorldData.js";
import { render } from "./Renderer.js";
import { getRandomImagePath, startRound, submitGuess } from "./GameController.js";

const spiral = document.getElementById("Spiral");
const container = document.getElementById("Wizard101GeoGuessrMap");
const submitButton = document.getElementById("submit-guess-button");

// disable drag on spiral and children
spiral!.ondragstart = () => false

init(spiral!, worlds);

enum MAP_SIZES {
  SMALL = 1,
  MEDIUM = 2,
  LARGE = 3,
}
var currentMapSize = MAP_SIZES.MEDIUM;
const SCALE_FACTOR = 3;

/** Given MAP_SIZE enum value, changes size of spiral and world icons */
function setMapSize(mapSize: MAP_SIZES): void {

  const spiralMediumWidth = 810;
  const spiralMediumHeight = 720;
  const worldIconsMediumWidth = 85;
  const worldIconsMediumHeight = 85;

  // get root to access and modify data
  const root = document.documentElement;

  // get scale and opacity depending on map size
  const scale = mapSize === MAP_SIZES.SMALL ? (1 / SCALE_FACTOR) : 1;
  const opacity = mapSize === MAP_SIZES.SMALL ? "30%" : "100%"

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
function toggleMapSize(): void {
  if (currentMapSize == MAP_SIZES.SMALL) {
    setMapSize(MAP_SIZES.MEDIUM);
  }
  else {
    setMapSize(MAP_SIZES.SMALL);
  }
}

/** Sets map size to medium */
function setMapSizeMedium(): void {
  setMapSize(MAP_SIZES.MEDIUM);
}

/** Sets map size to small */
function setMapSizeSmall(): void {
  setMapSize(MAP_SIZES.SMALL);
}

/** Function to be used to debug boarders */
function DebugWorldAreaBoarders(): void {
  const debugWorldName = "Dragonspyre" // change string to world name to debug
  const debugWorld = worlds.find(world => world.name === debugWorldName);

  setMapSize(MAP_SIZES.MEDIUM);
  render(spiral!, 1, worlds, debugWorld!, null);
}

// DebugWorldAreaBoarders();
// const debugBoarderButton = document.getElementById('debug-boarder-button');
// debugBoarderButton!.onclick = DebugWorldAreaBoarders;

startRound(getRandomImagePath());

container!.onmouseenter = () => {
  setMapSizeMedium();
  restoreTransform();
};
container!.onmouseleave = () => {
  saveAndScaleTransform(1 / SCALE_FACTOR);
  setMapSizeSmall();
};
submitButton!.onclick = submitGuess;