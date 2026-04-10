var src = document.getElementById("Spiral");
const SPIRAL_SRC = "./Images/Spiral.png";
const WIZARD_CITY_ICON_SRC = "./Images/(Icon)_Wizard_City.png";
const KROKOTOPIA_ICON_SRC = "./Images/(Icon)_Krokotopia.png";
const MARLEYBONE_ICON_SRC = "./Images/(Icon)_Marleybone.png";
const MOOSHU_ICON_SRC = "./Images/(Icon)_Mooshu.png";
const DRAGONSPYRE_ICON_SRC = "./Images/(Icon)_Dragonspyre.png";
const GRIZZLEHEIM_ICON_SRC = "./Images/(Icon)_Grizzleheim.png";
const WYSTERIA_ICON_SRC = "./Images/(Icon)_Wysteria.png";
const CELESTIA_ICON_SRC = "./Images/(Icon)_Celestia.png";
const ZAFARIA_ICON_SRC = "./Images/(Icon)_Zafaria.png";
const AVALON_ICON_SRC = "./Images/(Icon)_Avalon.png";
const AZTECA_ICON_SRC = "./Images/(Icon)_Azteca.png";
const KHRYSALIS_ICON_SRC = "./Images/(Icon)_Khrysalis.png";
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
var spiralImg = document.createElement("img");
spiralImg.src = SPIRAL_SRC;
spiralImg.id = "SpiralImage";
src?.appendChild(spiralImg);
for (const world of worlds) {
    var img = document.createElement("img");
    img.src = world.src;
    img.classList.add("world-icon", world.class);
    src?.appendChild(img);
}
export {};
//# sourceMappingURL=App.js.map