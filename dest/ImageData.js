export var Difficulty;
(function (Difficulty) {
    Difficulty[Difficulty["FREE"] = 0] = "FREE";
    Difficulty[Difficulty["EASY"] = 1] = "EASY";
    Difficulty[Difficulty["MEDIUM"] = 2] = "MEDIUM";
    Difficulty[Difficulty["HARD"] = 3] = "HARD";
    Difficulty[Difficulty["GOOFY"] = 4] = "GOOFY";
})(Difficulty || (Difficulty = {}));
export const guessImages = {
    "wizard-city": [
        { imgSrc: "Images/GuessImages/WizardCity1.png", difficulty: Difficulty.FREE, mapSize: 100, solutionMarker: { key: "area:wizard-city:Unicorn Way", xPercent: 30.3, yPercent: 71.3 } },
        { imgSrc: "Images/GuessImages/WizardCity2.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: { key: "area:wizard-city:Nightside", xPercent: 34.1, yPercent: 61.3 } },
        { imgSrc: "Images/GuessImages/WizardCity3.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: { key: "area:wizard-city:Triton Avenue", xPercent: 32.7, yPercent: 68.7 } },
        { imgSrc: "Images/GuessImages/WizardCity4.png", difficulty: Difficulty.EASY, mapSize: 100, solutionMarker: { key: "area:wizard-city:Colossus Boulevard", xPercent: 81.4, yPercent: 30.3 } },
        { imgSrc: "Images/GuessImages/WizardCity5.png", difficulty: Difficulty.EASY, mapSize: 100, solutionMarker: { key: "area:wizard-city:Haunted Cave", xPercent: 80.4, yPercent: 43.4 } },
        { imgSrc: "Images/GuessImages/WizardCity6.png", difficulty: Difficulty.EASY, mapSize: 100, solutionMarker: { key: "area:wizard-city:Cyclops Lane", xPercent: 59.8, yPercent: 59.0 } },
        { imgSrc: "Images/GuessImages/WizardCity7.png", difficulty: Difficulty.EASY, mapSize: 100, solutionMarker: { key: "area:wizard-city:Golem Court", xPercent: 55.3, yPercent: 28.0 } },
    ],
    "krokotopia": [
        { imgSrc: "Images/GuessImages/Krokotopia1.png", difficulty: Difficulty.EASY, mapSize: 100, solutionMarker: { key: "area:krokotopia:Entrance Hall", xPercent: 58.4, yPercent: 58.7 } },
        { imgSrc: "Images/GuessImages/Krokotopia2.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: { key: "area:krokotopia:Karanahn Barracks", xPercent: 47.4, yPercent: 66.2 } },
        { imgSrc: "Images/GuessImages/Krokotopia3.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: { key: "area:krokotopia:Tomb of Storms", xPercent: 25.4, yPercent: 60.5 } },
        { imgSrc: "Images/GuessImages/Krokotopia4.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: { key: "area:krokotopia:Hall of Champions", xPercent: 64.6, yPercent: 54.1 } },
    ],
    "marleybone": [
        { imgSrc: "Images/GuessImages/Marleybone1.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: { key: "area:marleybone:Scotland Yard Roof", xPercent: 82.1, yPercent: 43.4 } },
        { imgSrc: "Images/GuessImages/Marleybone2.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: { key: "area:marleybone:Royal Museum", xPercent: 52.1, yPercent: 56.2 } },
        { imgSrc: "Images/GuessImages/Marleybone3.png", difficulty: Difficulty.EASY, mapSize: 100, solutionMarker: { key: "area:marleybone:Digmoore Station", xPercent: 49.7, yPercent: 32.5 } },
        { imgSrc: "Images/GuessImages/Marleybone4.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: { key: "area:marleybone:Hyde Park", xPercent: 54.4, yPercent: 45.9 } },
        { imgSrc: "Images/GuessImages/Marleybone5.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: { key: "area:marleybone:Newgate Prison", xPercent: 87.6, yPercent: 78.4 } },
    ],
    "mooshu": [
        { imgSrc: "Images/GuessImages/Mooshu1.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: { key: "area:mooshu:Ancient Burial Grounds", xPercent: 76.4, yPercent: 55.3 } },
        { imgSrc: "Images/GuessImages/Mooshu2.png", difficulty: Difficulty.EASY, mapSize: 100, solutionMarker: { key: "area:mooshu:Jade Palace", xPercent: 57.6, yPercent: 42.4 } },
        { imgSrc: "Images/GuessImages/Mooshu3.png", difficulty: Difficulty.EASY, mapSize: 100, solutionMarker: { key: "area:mooshu:Jade Palace", xPercent: 32.5, yPercent: 71.8 } },
        { imgSrc: "Images/GuessImages/Mooshu4.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: { key: "area:mooshu:Cave of Solitude", xPercent: 49.3, yPercent: 49.5 } },
    ],
    "dragonspyre": [
        { imgSrc: "Images/GuessImages/Dragonspyre1.png", difficulty: Difficulty.FREE, mapSize: 100, solutionMarker: { key: "area:dragonspyre:The Basilica", xPercent: 61.3, yPercent: 42.5 } },
        { imgSrc: "Images/GuessImages/Dragonspyre2.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: { key: "area:dragonspyre:Dragonspyre Academy", xPercent: 74.5, yPercent: 47.5 } },
        { imgSrc: "Images/GuessImages/Dragonspyre3.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: { key: "area:dragonspyre:The Atheneum", xPercent: 37.4, yPercent: 47.1 } },
        { imgSrc: "Images/GuessImages/Dragonspyre4.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: { key: "area:dragonspyre:The Grand Chasm", xPercent: 48.8, yPercent: 56.7 } },
        { imgSrc: "Images/GuessImages/Dragonspyre5.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: { key: "area:dragonspyre:Dragons Roost", xPercent: 43.8, yPercent: 42.8 } },
        { imgSrc: "Images/GuessImages/Dragonspyre6.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: { key: "area:dragonspyre:The Drake Hatchery", xPercent: 53.1, yPercent: 61.7 } },
        { imgSrc: "Images/GuessImages/Dragonspyre7.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: { key: "area:dragonspyre:The Drake Hatchery", xPercent: 48.9, yPercent: 78.1 } },
    ],
};
//# sourceMappingURL=ImageData.js.map