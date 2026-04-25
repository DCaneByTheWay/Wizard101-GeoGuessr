export enum Difficulty {
    FREE = 0,
    EASY = 1,
    MEDIUM = 2,
    HARD = 3,
    VERY_HARD = 4,
    GOOFY = 999,
    UNDEFINED = -1
}

export interface GuessImage {
    imgSrc: string;
    difficulty: Difficulty;
    mapSize: number;
    solutionMarker: {
        key: string, 
        xPercent: number, 
        yPercent: number
    };
}

export function difficultyToString(difficulty: Difficulty): string {
    switch (difficulty) {
        case Difficulty.FREE:
            return "Free";
        case Difficulty.EASY:
            return "Easy";
        case Difficulty.MEDIUM:
            return "Medium";
        case Difficulty.HARD:
            return "Hard";
        case Difficulty.VERY_HARD:
            return "Very Hard";
        case Difficulty.GOOFY:
            return "Goofy";
        case Difficulty.UNDEFINED:
            return "Undefined";
        default:
            return "UNDEFINED";
    }
}

export function difficultyToValue(difficulty: Difficulty): number {
    switch (difficulty) {
        case Difficulty.FREE:
            return 1/8;
        case Difficulty.EASY:
            return 1/4;
        case Difficulty.MEDIUM:
            return 2/4;
        case Difficulty.HARD:
            return 3/4;
        case Difficulty.VERY_HARD:
            return 4/4;
        case Difficulty.GOOFY:
            return 67;
        case Difficulty.UNDEFINED:
            return -1;
        default:
            return -1;
    }
}

// TODO: implement way to track arc for gamemodes like arc1, arc2, etc...
// TODO: set mapsize for all maps

export const guessImages: Record<string, GuessImage[]> = {
    "wizard-city": [
        {imgSrc: "Images/GuessImages/WizardCity1.png", difficulty: Difficulty.FREE, mapSize: 100, solutionMarker: {key: "area:wizard-city:Unicorn Way", xPercent: 30.3, yPercent: 71.3}},
        {imgSrc: "Images/GuessImages/WizardCity2.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:wizard-city:Nightside", xPercent: 34.1, yPercent: 61.3}},
        {imgSrc: "Images/GuessImages/WizardCity3.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:wizard-city:Triton Avenue", xPercent: 32.7, yPercent: 68.7}},
        {imgSrc: "Images/GuessImages/WizardCity4.png", difficulty: Difficulty.EASY, mapSize: 100, solutionMarker: {key: "area:wizard-city:Colossus Boulevard", xPercent: 81.4, yPercent: 30.3}},
        {imgSrc: "Images/GuessImages/WizardCity5.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:wizard-city:Haunted Cave", xPercent: 80.4, yPercent: 43.4}},
        {imgSrc: "Images/GuessImages/WizardCity6.png", difficulty: Difficulty.EASY, mapSize: 100, solutionMarker: {key: "area:wizard-city:Cyclops Lane", xPercent: 59.8, yPercent: 59.0}},
        {imgSrc: "Images/GuessImages/WizardCity7.png", difficulty: Difficulty.EASY, mapSize: 100, solutionMarker: {key: "area:wizard-city:Golem Court", xPercent: 55.3, yPercent: 28.0}},
        {imgSrc: "Images/GuessImages/WizardCity8.png", difficulty: Difficulty.EASY, mapSize: 100, solutionMarker: {key: "area:wizard-city:The Commons", xPercent: 55.5, yPercent: 50.2}},
        {imgSrc: "Images/GuessImages/WizardCity9.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:wizard-city:Nightside", xPercent: 67.2, yPercent: 49.1}},
        {imgSrc: "Images/GuessImages/WizardCity10.png", difficulty: Difficulty.GOOFY, mapSize: 100, solutionMarker: {key: "area:wizard-city:Dark Cave", xPercent: 70.1, yPercent: 54.0}},
        {imgSrc: "Images/GuessImages/WizardCity11.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:wizard-city:Triton Avenue", xPercent: 17.7, yPercent: 67.4}},
        {imgSrc: "Images/GuessImages/WizardCity12.png", difficulty: Difficulty.FREE, mapSize: 100, solutionMarker: {key: "area:wizard-city:The Commons", xPercent: 50.9, yPercent: 73.3}},
        {imgSrc: "Images/GuessImages/WizardCity13.png", difficulty: Difficulty.FREE, mapSize: 100, solutionMarker: {key: "area:wizard-city:Ravenwood", xPercent: 64.6, yPercent: 37.0}},
        {imgSrc: "Images/GuessImages/WizardCity14.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:wizard-city:Pet Pavilion", xPercent: 34.0, yPercent: 51.9}},
        {imgSrc: "Images/GuessImages/WizardCity15.png", difficulty: Difficulty.EASY, mapSize: 100, solutionMarker: {key: "area:wizard-city:Shopping District", xPercent: 56.1, yPercent: 56.2}},
        {imgSrc: "Images/GuessImages/WizardCity16.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:wizard-city:Olde Town", xPercent: 65.8, yPercent: 57.2}},
        {imgSrc: "Images/GuessImages/WizardCity17.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:wizard-city:Firecat Alley", xPercent: 39.8, yPercent: 44.2}},
    ],
    "krokotopia": [
        {imgSrc: "Images/GuessImages/Krokotopia1.png", difficulty: Difficulty.EASY, mapSize: 100, solutionMarker: {key: "area:krokotopia:Entrance Hall", xPercent: 58.4, yPercent: 58.7}},
        {imgSrc: "Images/GuessImages/Krokotopia2.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:krokotopia:Karanahn Barracks", xPercent: 47.4, yPercent: 66.2}},
        {imgSrc: "Images/GuessImages/Krokotopia3.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:krokotopia:Tomb of Storms", xPercent: 25.4, yPercent: 60.5}},
        {imgSrc: "Images/GuessImages/Krokotopia4.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:krokotopia:Hall of Champions", xPercent: 64.6, yPercent: 54.1}},
        {imgSrc: "Images/GuessImages/Krokotopia5.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:krokotopia:The Oasis", xPercent: 66.4, yPercent: 59.5}},
        {imgSrc: "Images/GuessImages/Krokotopia6.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:krokotopia:Grand Arena", xPercent: 62.7, yPercent: 41.5}},
        {imgSrc: "Images/GuessImages/Krokotopia7.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:krokotopia:Palace of Fire", xPercent: 42.1, yPercent: 39.6}},
        {imgSrc: "Images/GuessImages/Krokotopia8.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:krokotopia:Djeserit Family Tomb", xPercent: 75.3, yPercent: 26.5}},
        {imgSrc: "Images/GuessImages/Krokotopia9.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:krokotopia:Altar of Kings", xPercent: 39.0, yPercent: 47.9}},
        {imgSrc: "Images/GuessImages/Krokotopia10.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:krokotopia:Chamber of Fire", xPercent: 49.9, yPercent: 64.3}},
        {imgSrc: "Images/GuessImages/Krokotopia11.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:krokotopia:Royal Hall", xPercent: 60.0, yPercent: 48.1}},
        {imgSrc: "Images/GuessImages/Krokotopia12.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:krokotopia:Chamber of Fire", xPercent: 71.1, yPercent: 54.2}},
        {imgSrc: "Images/GuessImages/Krokotopia13.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:krokotopia:Well of Spirits", xPercent: 48.5, yPercent: 57.0}},
        {imgSrc: "Images/GuessImages/Krokotopia14.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:krokotopia:Well of Spirits", xPercent: 46.3, yPercent: 49.2}},
        {imgSrc: "Images/GuessImages/Krokotopia15.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:krokotopia:Ahnic Family Tomb", xPercent: 26.7, yPercent: 68.5}},
    ],
    "marleybone": [
        {imgSrc: "Images/GuessImages/Marleybone1.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:marleybone:Scotland Yard Roof", xPercent: 82.1, yPercent: 43.4}},
        {imgSrc: "Images/GuessImages/Marleybone2.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:marleybone:Royal Museum", xPercent: 52.1, yPercent: 56.2}},
        {imgSrc: "Images/GuessImages/Marleybone3.png", difficulty: Difficulty.EASY, mapSize: 100, solutionMarker: {key: "area:marleybone:Digmoore Station", xPercent: 49.7, yPercent: 32.5}},
        {imgSrc: "Images/GuessImages/Marleybone4.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:marleybone:Hyde Park", xPercent: 54.4, yPercent: 45.9}},
        {imgSrc: "Images/GuessImages/Marleybone5.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:marleybone:Newgate Prison", xPercent: 87.6, yPercent: 78.4}},
        {imgSrc: "Images/GuessImages/Marleybone6.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:marleybone:Regents Square", xPercent: 29.8, yPercent: 77.3}},
    ],
    "mooshu": [
        {imgSrc: "Images/GuessImages/Mooshu1.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:mooshu:Ancient Burial Grounds", xPercent: 76.4, yPercent: 55.3}},
        {imgSrc: "Images/GuessImages/Mooshu2.png", difficulty: Difficulty.EASY, mapSize: 100, solutionMarker: {key: "area:mooshu:Jade Palace", xPercent: 57.6, yPercent: 42.4}},
        {imgSrc: "Images/GuessImages/Mooshu3.png", difficulty: Difficulty.EASY, mapSize: 100, solutionMarker: {key: "area:mooshu:Jade Palace", xPercent: 32.5, yPercent: 71.8}},
        {imgSrc: "Images/GuessImages/Mooshu4.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:mooshu:Cave of Solitude", xPercent: 49.3, yPercent: 49.5}},
    ],
    "dragonspyre": [
        {imgSrc: "Images/GuessImages/Dragonspyre1.png", difficulty: Difficulty.FREE, mapSize: 100, solutionMarker: {key: "area:dragonspyre:The Basilica", xPercent: 61.3, yPercent: 42.5}},
        {imgSrc: "Images/GuessImages/Dragonspyre2.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:dragonspyre:The Necropolis", xPercent: 74.5, yPercent: 47.5}},
        {imgSrc: "Images/GuessImages/Dragonspyre3.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:dragonspyre:The Atheneum", xPercent: 37.4, yPercent: 47.1}},
        {imgSrc: "Images/GuessImages/Dragonspyre4.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:dragonspyre:The Grand Chasm", xPercent: 48.8, yPercent: 56.7}},
        {imgSrc: "Images/GuessImages/Dragonspyre5.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:dragonspyre:Dragons Roost", xPercent: 43.8, yPercent: 42.8}},
        {imgSrc: "Images/GuessImages/Dragonspyre6.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:dragonspyre:The Drake Hatchery", xPercent: 53.1, yPercent: 61.7}},
        {imgSrc: "Images/GuessImages/Dragonspyre7.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:dragonspyre:The Drake Hatchery", xPercent: 48.9, yPercent: 78.1}},
    ],
    "grizzleheim": [
        {imgSrc: "Images/GuessImages/Grizzleheim1.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:grizzleheim:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Grizzleheim2.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:grizzleheim:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Grizzleheim3.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:grizzleheim:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Grizzleheim4.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:grizzleheim:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Grizzleheim5.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:grizzleheim:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Grizzleheim6.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:grizzleheim:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Grizzleheim7.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:grizzleheim:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Grizzleheim8.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:grizzleheim:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Grizzleheim9.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:grizzleheim:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Grizzleheim10.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:grizzleheim:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Grizzleheim11.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:grizzleheim:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Grizzleheim12.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:grizzleheim:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Grizzleheim13.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:grizzleheim:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Grizzleheim14.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:grizzleheim:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Grizzleheim15.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:grizzleheim:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Grizzleheim16.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:grizzleheim:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
    ],
    "celestia": [
        {imgSrc: "Images/GuessImages/Celestia1.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:celestia:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Celestia2.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:celestia:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Celestia3.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:celestia:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Celestia4.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:celestia:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Celestia5.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:celestia:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Celestia6.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:celestia:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Celestia7.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:celestia:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Celestia8.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:celestia:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Celestia9.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:celestia:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Celestia10.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:celestia:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Celestia11.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:celestia:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Celestia12.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:celestia:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Celestia13.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:celestia:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Celestia14.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:celestia:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Celestia15.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:celestia:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Celestia16.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:celestia:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Celestia17.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:celestia:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Celestia18.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:celestia:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Celestia19.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:celestia:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Celestia20.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:celestia:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
    ],
    "wysteria": [
        {imgSrc: "Images/GuessImages/Wysteria1.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:wysteria:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Wysteria2.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:wysteria:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Wysteria3.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:wysteria:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Wysteria4.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:wysteria:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Wysteria5.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:wysteria:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Wysteria6.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:wysteria:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Wysteria7.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:wysteria:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Wysteria8.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:wysteria:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Wysteria9.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:wysteria:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
    ],
    "zafaria": [
        {imgSrc: "Images/GuessImages/Zafaria1.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:zafaria:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Zafaria2.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:zafaria:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Zafaria3.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:zafaria:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Zafaria4.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:zafaria:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Zafaria5.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:zafaria:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Zafaria6.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:zafaria:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Zafaria7.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:zafaria:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Zafaria8.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:zafaria:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Zafaria9.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:zafaria:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Zafaria10.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:zafaria:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Zafaria11.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:zafaria:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Zafaria12.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:zafaria:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Zafaria13.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:zafaria:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Zafaria14.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:zafaria:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Zafaria15.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:zafaria:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Zafaria16.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:zafaria:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Zafaria17.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:zafaria:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Zafaria18.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:zafaria:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Zafaria19.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:zafaria:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Zafaria20.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:zafaria:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
    ],
    "avalon": [
        {imgSrc: "Images/GuessImages/Avalon1.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:avalon:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Avalon2.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:avalon:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Avalon3.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:avalon:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Avalon4.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:avalon:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Avalon5.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:avalon:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Avalon6.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:avalon:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Avalon7.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:avalon:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Avalon8.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:avalon:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Avalon9.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:avalon:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Avalon10.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:avalon:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Avalon11.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:avalon:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Avalon12.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:avalon:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Avalon13.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:avalon:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Avalon14.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:avalon:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Avalon15.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:avalon:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Avalon16.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:avalon:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Avalon17.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:avalon:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Avalon18.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:avalon:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Avalon19.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:avalon:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Avalon20.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:avalon:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Avalon21.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:avalon:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Avalon22.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:avalon:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Avalon23.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:avalon:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Avalon24.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:avalon:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Avalon25.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:avalon:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Avalon26.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:avalon:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Avalon27.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:avalon:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
    ],
    "azteca": [
        {imgSrc: "Images/GuessImages/Azteca1.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:azteca:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Azteca2.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:azteca:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Azteca3.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:azteca:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Azteca4.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:azteca:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Azteca5.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:azteca:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Azteca6.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:azteca:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Azteca7.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:azteca:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Azteca8.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:azteca:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Azteca9.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:azteca:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Azteca10.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:azteca:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Azteca11.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:azteca:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Azteca12.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:azteca:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Azteca13.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:azteca:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Azteca14.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:azteca:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Azteca15.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:azteca:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Azteca16.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:azteca:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Azteca17.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:azteca:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Azteca18.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:azteca:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Azteca19.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:azteca:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Azteca20.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:azteca:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Azteca21.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:azteca:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Azteca22.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:azteca:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Azteca23.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:azteca:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Azteca24.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:azteca:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Azteca25.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:azteca:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Azteca26.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:azteca:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Azteca27.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:azteca:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Azteca28.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:azteca:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Azteca29.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:azteca:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Azteca30.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:azteca:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Azteca31.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:azteca:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Azteca32.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:azteca:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Azteca33.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:azteca:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Azteca34.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:azteca:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Azteca35.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:azteca:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
    ],
    "khrysalis": [
        {imgSrc: "Images/GuessImages/Khrysalis1.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:khrysalis:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Khrysalis2.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:khrysalis:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Khrysalis3.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:khrysalis:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Khrysalis4.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:khrysalis:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Khrysalis5.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:khrysalis:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Khrysalis6.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:khrysalis:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Khrysalis7.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:khrysalis:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Khrysalis8.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:khrysalis:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Khrysalis9.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:khrysalis:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Khrysalis10.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:khrysalis:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Khrysalis11.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:khrysalis:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Khrysalis12.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:khrysalis:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Khrysalis13.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:khrysalis:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Khrysalis14.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:khrysalis:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Khrysalis15.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:khrysalis:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Khrysalis16.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:khrysalis:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Khrysalis17.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:khrysalis:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Khrysalis18.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:khrysalis:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Khrysalis19.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:khrysalis:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Khrysalis20.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:khrysalis:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Khrysalis21.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:khrysalis:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Khrysalis22.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:khrysalis:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Khrysalis23.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:khrysalis:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
        {imgSrc: "Images/GuessImages/Khrysalis24.png", difficulty: Difficulty.UNDEFINED, mapSize: 100, solutionMarker: {key: "area:khrysalis:AAAAAAAAAAAAAAA", xPercent: 0, yPercent: 0}},
    ],
    // TODO: add more arc 1 guessImages
    // TODO: hardcode arc 2 solutionMarkers
}