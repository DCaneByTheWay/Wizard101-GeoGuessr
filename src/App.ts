const spiral = document.getElementById("Spiral");

enum MAP_SIZES {
  SMALL = 1,
  MEDIUM = 2,
  LARGE = 3,
}
var currentMapSize = MAP_SIZES.MEDIUM;

// image src constants
const SPIRAL_SRC = "./Images/Spiral.png";
const WIZARD_CITY_ICON_SRC = "./Images/WorldIcons/(Icon)_Wizard_City.png";
const KROKOTOPIA_ICON_SRC = "./Images/WorldIcons/(Icon)_Krokotopia.png";
const MARLEYBONE_ICON_SRC = "./Images/WorldIcons/(Icon)_Marleybone.png";
const MOOSHU_ICON_SRC = "./Images/WorldIcons/(Icon)_Mooshu.png";
const DRAGONSPYRE_ICON_SRC = "./Images/WorldIcons/(Icon)_Dragonspyre.png";
const GRIZZLEHEIM_ICON_SRC = "./Images/WorldIcons/(Icon)_Grizzleheim.png";
const WYSTERIA_ICON_SRC = "./Images/WorldIcons/(Icon)_Wysteria.png";
const CELESTIA_ICON_SRC = "./Images/WorldIcons/(Icon)_Celestia.png";
const ZAFARIA_ICON_SRC = "./Images/WorldIcons/(Icon)_Zafaria.png";
const AVALON_ICON_SRC = "./Images/WorldIcons/(Icon)_Avalon.png";
const AZTECA_ICON_SRC = "./Images/WorldIcons/(Icon)_Azteca.png";
const KHRYSALIS_ICON_SRC = "./Images/WorldIcons/(Icon)_Khrysalis.png";

// set world icon classes
const worlds = [
  { src: WIZARD_CITY_ICON_SRC, class: "wizard-city" },
  { src: KROKOTOPIA_ICON_SRC, class: "krokotopia" },
  { src: MARLEYBONE_ICON_SRC, class: "marleybone" },
  { src: MOOSHU_ICON_SRC, class: "mooshu" },
  { src: DRAGONSPYRE_ICON_SRC, class: "dragonspyre" },
  { src: GRIZZLEHEIM_ICON_SRC, class: "grizzleheim" },
  { src: CELESTIA_ICON_SRC, class: "celestia" },
  { src: WYSTERIA_ICON_SRC, class: "wysteria" },
  { src: ZAFARIA_ICON_SRC, class: "zafaria" },
  { src: AVALON_ICON_SRC, class: "avalon" },
  { src: AZTECA_ICON_SRC, class: "azteca" },
  { src: KHRYSALIS_ICON_SRC, class: "khrysalis" },
];

// add spiral to page
const spiralImg = document.createElement("img");
spiralImg.src = SPIRAL_SRC;
spiralImg.id = "SpiralImage";
spiral?.appendChild(spiralImg);

// add world icons to page
for (const world of worlds) {
  var img = document.createElement("img");
  img.src = world.src;
  img.classList.add("world-icon", world.class);
  spiral?.appendChild(img);
}

// disable drag on spiral and children
document.getElementById("Spiral")!.ondragstart = function () {
  return false;
};

/** Given MAP_SIZE enum value, changes size of spiral and world icons */
function setMapSize(mapSize: MAP_SIZES): void {
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

spiral!.onmouseenter = setMapSizeMedium;
spiral!.onmouseleave = setMapSizeSmall;