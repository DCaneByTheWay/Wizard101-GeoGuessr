const images = [
    "WizardCity1",
    "WizardCity2",
    "WizardCity3",
    "WizardCity4",
    "WizardCity5",
    "WizardCity6",
    "WizardCity7",
    "Krokotopia1",
    "Krokotopia2",
    "Krokotopia3",
    "Krokotopia4",
    "Marleybone1",
    "Marleybone2",
    "Marleybone3",
    "Marleybone4",
    "Marleybone5",
    "Mooshu1",
    "Mooshu2",
    "Mooshu3",
    "Mooshu4",
    "Dragonspyre1",
    "Dragonspyre2",
    "Dragonspyre3",
    "Dragonspyre4",
    "Dragonspyre5",
    "Dragonspyre6",
    "Dragonspyre7"
];
const imageElement = document.getElementById("guess-image");
// disable drag on spiral and children
imageElement.ondragstart = () => false;
export function setBackgroundImage(src) {
    if (imageElement)
        imageElement.src = src;
}
export function startRound(imgSrc) {
    setBackgroundImage(imgSrc);
    // TODO: add actual game logic
}
export function getRandomImagePath() {
    const randomImg = images[Math.floor(Math.random() * images.length)];
    return `Images/GuessImages/${randomImg}.png`;
}
//# sourceMappingURL=GameController.js.map