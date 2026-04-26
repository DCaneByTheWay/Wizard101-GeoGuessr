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
        {imgSrc: "Images/GuessImages/Grizzleheim1.png", difficulty: Difficulty.EASY, mapSize: 100, solutionMarker: {key: "area:grizzleheim:Northguard", xPercent: 45.3, yPercent: 62.3}},
        {imgSrc: "Images/GuessImages/Grizzleheim2.png", difficulty: Difficulty.EASY, mapSize: 100, solutionMarker: {key: "area:grizzleheim:Northguard", xPercent: 54.4, yPercent: 52.7}},
        {imgSrc: "Images/GuessImages/Grizzleheim3.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:grizzleheim:Northguard", xPercent: 35.4, yPercent: 42.3}},
        {imgSrc: "Images/GuessImages/Grizzleheim4.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:grizzleheim:Northguard", xPercent: 25.5, yPercent: 38.2}},
        {imgSrc: "Images/GuessImages/Grizzleheim5.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:grizzleheim:Vigrid Roughland", xPercent: 47.4, yPercent: 73.8}},
        {imgSrc: "Images/GuessImages/Grizzleheim6.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:grizzleheim:Vigrid Roughland", xPercent: 79.2, yPercent: 62.6}},
        {imgSrc: "Images/GuessImages/Grizzleheim7.png", difficulty: Difficulty.FREE, mapSize: 100, solutionMarker: {key: "area:grizzleheim:Northguard", xPercent: 57.9, yPercent: 63.9}},
        {imgSrc: "Images/GuessImages/Grizzleheim8.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:grizzleheim:Ravenscar", xPercent: 70.6, yPercent: 27.4}},
        {imgSrc: "Images/GuessImages/Grizzleheim9.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:grizzleheim:Northguard", xPercent: 65.8, yPercent: 37.3}},
        {imgSrc: "Images/GuessImages/Grizzleheim10.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:grizzleheim:Mirkholm Keep", xPercent: 83.4, yPercent: 45.3}},
        {imgSrc: "Images/GuessImages/Grizzleheim11.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:grizzleheim:Mirkholm Keep", xPercent: 43.7, yPercent: 19.8}},
        {imgSrc: "Images/GuessImages/Grizzleheim12.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:grizzleheim:Savarstaad Pass", xPercent: 84.0, yPercent: 38.0}},
        {imgSrc: "Images/GuessImages/Grizzleheim13.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:grizzleheim:Savarstaad Pass", xPercent: 19.8, yPercent: 75.6}},
        {imgSrc: "Images/GuessImages/Grizzleheim14.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:grizzleheim:Nidavellir", xPercent: 44.7, yPercent: 54.6}},
        {imgSrc: "Images/GuessImages/Grizzleheim15.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:grizzleheim:Nidavellir", xPercent: 49.2, yPercent: 43.0}},
        {imgSrc: "Images/GuessImages/Grizzleheim16.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:grizzleheim:Nidavellir", xPercent: 53.5, yPercent: 48.2}},
    ],
    "celestia": [
        {imgSrc: "Images/GuessImages/Celestia1.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:celestia:Crustacean Empire", xPercent: 22.2, yPercent: 73.4}},
        {imgSrc: "Images/GuessImages/Celestia2.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:celestia:The Grotto", xPercent: 34.3, yPercent: 65.4}},
        {imgSrc: "Images/GuessImages/Celestia3.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:celestia:Science Center", xPercent: 38.2, yPercent: 53.5}},
        {imgSrc: "Images/GuessImages/Celestia4.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:celestia:Stormriven Hall", xPercent: 48.3, yPercent: 59.1}},
        {imgSrc: "Images/GuessImages/Celestia5.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:celestia:The Floating Land", xPercent: 85.7, yPercent: 71.3}},
        {imgSrc: "Images/GuessImages/Celestia6.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:celestia:Stormriven", xPercent: 14.7, yPercent: 59.8}},
        {imgSrc: "Images/GuessImages/Celestia7.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:celestia:Crustacean Empire", xPercent: 70.6, yPercent: 82.4}},
        {imgSrc: "Images/GuessImages/Celestia8.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:celestia:The Floating Land", xPercent: 54.0, yPercent: 35.5}},
        {imgSrc: "Images/GuessImages/Celestia9.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:celestia:The Floating Land", xPercent: 33.1, yPercent: 42.0}},
        {imgSrc: "Images/GuessImages/Celestia10.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:celestia:The Floating Land", xPercent: 31.2, yPercent: 53.6}},
        {imgSrc: "Images/GuessImages/Celestia11.png", difficulty: Difficulty.GOOFY, mapSize: 100, solutionMarker: {key: "area:celestia:Celestia Base Camp", xPercent: 68.7, yPercent: 43.4}},
        {imgSrc: "Images/GuessImages/Celestia12.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:celestia:The Grotto", xPercent: 69.8, yPercent: 19.6}},
        {imgSrc: "Images/GuessImages/Celestia13.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:celestia:The Floating Land", xPercent: 85.7, yPercent: 68.0}},
        {imgSrc: "Images/GuessImages/Celestia14.png", difficulty: Difficulty.GOOFY, mapSize: 100, solutionMarker: {key: "area:celestia:District of the Stars", xPercent: 20.9, yPercent: 20.0}},
        {imgSrc: "Images/GuessImages/Celestia15.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:celestia:Survey Camp", xPercent: 76.6, yPercent: 39.7}},
        {imgSrc: "Images/GuessImages/Celestia16.png", difficulty: Difficulty.EASY, mapSize: 100, solutionMarker: {key: "area:celestia:Celestia Base Camp", xPercent: 63.8, yPercent: 54.4}},
        {imgSrc: "Images/GuessImages/Celestia17.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:celestia:District of the Stars", xPercent: 68.9, yPercent: 58.4}},
        {imgSrc: "Images/GuessImages/Celestia18.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:celestia:District of the Stars", xPercent: 66.4, yPercent: 70.9}},
        {imgSrc: "Images/GuessImages/Celestia19.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:celestia:District of the Stars", xPercent: 24.9, yPercent: 30.8}},
        {imgSrc: "Images/GuessImages/Celestia20.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:celestia:District of the Stars", xPercent: 15.4, yPercent: 30.5}},
    ],
    "wysteria": [
        {imgSrc: "Images/GuessImages/Wysteria1.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:wysteria:Pigswick Academy", xPercent: 41.8, yPercent: 35.6}},
        {imgSrc: "Images/GuessImages/Wysteria2.png", difficulty: Difficulty.EASY, mapSize: 100, solutionMarker: {key: "area:wysteria:Pigswick Academy", xPercent: 58.8, yPercent: 30.1}},
        {imgSrc: "Images/GuessImages/Wysteria3.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:wysteria:Pigswick Academy", xPercent: 52.7, yPercent: 54.7}},
        {imgSrc: "Images/GuessImages/Wysteria4.png", difficulty: Difficulty.EASY, mapSize: 100, solutionMarker: {key: "area:wysteria:Pigswick Academy", xPercent: 55.6, yPercent: 23.7}},
        {imgSrc: "Images/GuessImages/Wysteria5.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:wysteria:Pegasus Place", xPercent: 30.1, yPercent: 68.5}},
        {imgSrc: "Images/GuessImages/Wysteria6.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:wysteria:Pegasus Place", xPercent: 52.3, yPercent: 24.9}},
        {imgSrc: "Images/GuessImages/Wysteria7.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:wysteria:Pegasus Place", xPercent: 67.7, yPercent: 51.2}},
        {imgSrc: "Images/GuessImages/Wysteria8.png", difficulty: Difficulty.GOOFY, mapSize: 100, solutionMarker: {key: "area:wysteria:Pegasus Place", xPercent: 88.9, yPercent: 39.7}},
        {imgSrc: "Images/GuessImages/Wysteria9.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:wysteria:Tanglewood Way", xPercent: 41.0, yPercent: 47.1}},
    ],
    "zafaria": [
        {imgSrc: "Images/GuessImages/Zafaria1.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:zafaria:Waterfront", xPercent: 68.5, yPercent: 26.8}},
        {imgSrc: "Images/GuessImages/Zafaria2.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:zafaria:Waterfront", xPercent: 31.6, yPercent: 34.8}},
        {imgSrc: "Images/GuessImages/Zafaria3.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:zafaria:Drum Jungle", xPercent: 60.3, yPercent: 26.6}},
        {imgSrc: "Images/GuessImages/Zafaria4.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:zafaria:Drum Jungle", xPercent: 25.4, yPercent: 61.4}},
        {imgSrc: "Images/GuessImages/Zafaria5.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:zafaria:Elephant Graveyard", xPercent: 66.5, yPercent: 67.8}},
        {imgSrc: "Images/GuessImages/Zafaria6.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:zafaria:Elephant Graveyard", xPercent: 53.7, yPercent: 50.5}},
        {imgSrc: "Images/GuessImages/Zafaria7.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:zafaria:Elephant Graveyard", xPercent: 62.9, yPercent: 77.4}},
        {imgSrc: "Images/GuessImages/Zafaria8.png", difficulty: Difficulty.EASY, mapSize: 100, solutionMarker: {key: "area:zafaria:Baobab Crossroads", xPercent: 56.5, yPercent: 74.2}},
        {imgSrc: "Images/GuessImages/Zafaria9.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:zafaria:Savannah", xPercent: 77.1, yPercent: 53.9}},
        {imgSrc: "Images/GuessImages/Zafaria10.png", difficulty: Difficulty.GOOFY, mapSize: 100, solutionMarker: {key: "area:zafaria:Savannah", xPercent: 58.7, yPercent: 60.3}},
        {imgSrc: "Images/GuessImages/Zafaria11.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:zafaria:Savannah", xPercent: 24.6, yPercent: 64.9}},
        {imgSrc: "Images/GuessImages/Zafaria12.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:zafaria:Zamunda Outskirts", xPercent: 35.2, yPercent: 61.9}},
        {imgSrc: "Images/GuessImages/Zafaria13.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:zafaria:Zamunda Outskirts", xPercent: 67.0, yPercent: 49.3}},
        {imgSrc: "Images/GuessImages/Zafaria14.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:zafaria:Zamunda", xPercent: 24.8, yPercent: 48.9}},
        {imgSrc: "Images/GuessImages/Zafaria15.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:zafaria:Zamunda", xPercent: 69.9, yPercent: 31.2}},
        {imgSrc: "Images/GuessImages/Zafaria16.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:zafaria:Baobab Crossroads", xPercent: 45.8, yPercent: 61.1}},
        {imgSrc: "Images/GuessImages/Zafaria17.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:zafaria:Baobab Market", xPercent: 79.4, yPercent: 76.9}},
        {imgSrc: "Images/GuessImages/Zafaria18.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:zafaria:Stone Town", xPercent: 27.2, yPercent: 52.2}},
        {imgSrc: "Images/GuessImages/Zafaria19.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:zafaria:Waterfront", xPercent: 65.4, yPercent: 66.5}},
        {imgSrc: "Images/GuessImages/Zafaria20.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:zafaria:Drum Jungle", xPercent: 48.0, yPercent: 44.6}},
    ],
    "avalon": [
        {imgSrc: "Images/GuessImages/Avalon1.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:avalon:Catacombs", xPercent: 68.4, yPercent: 70.7}},
        {imgSrc: "Images/GuessImages/Avalon2.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:avalon:The Wild", xPercent: 23.4, yPercent: 43.1}},
        {imgSrc: "Images/GuessImages/Avalon3.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:avalon:The Wyrd", xPercent: 50.2, yPercent: 64.9}},
        {imgSrc: "Images/GuessImages/Avalon4.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:avalon:The Wyrd", xPercent: 71.7, yPercent: 66.7}},
        {imgSrc: "Images/GuessImages/Avalon5.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:avalon:The Wyrd", xPercent: 29.2, yPercent: 32.6}},
        {imgSrc: "Images/GuessImages/Avalon6.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:avalon:The Wyrd", xPercent: 74.4, yPercent: 45.6}},
        {imgSrc: "Images/GuessImages/Avalon7.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:avalon:Dun Dara", xPercent: 81.3, yPercent: 43.7}},
        {imgSrc: "Images/GuessImages/Avalon8.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:avalon:Dun Dara", xPercent: 60.6, yPercent: 27.7}},
        {imgSrc: "Images/GuessImages/Avalon9.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:avalon:Lake Shore", xPercent: 35.2, yPercent: 42.7}},
        {imgSrc: "Images/GuessImages/Avalon10.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:avalon:Outer Yard", xPercent: 44.8, yPercent: 58.4}},
        {imgSrc: "Images/GuessImages/Avalon11.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:avalon:Outer Yard", xPercent: 23.0, yPercent: 55.5}},
        {imgSrc: "Images/GuessImages/Avalon12.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:avalon:Lake Shore", xPercent: 27.8, yPercent: 67.3}},
        {imgSrc: "Images/GuessImages/Avalon13.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:avalon:Deepwater", xPercent: 36.9, yPercent: 51.7}},
        {imgSrc: "Images/GuessImages/Avalon14.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:avalon:Catacombs", xPercent: 22.5, yPercent: 30.8}},
        {imgSrc: "Images/GuessImages/Avalon15.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:avalon:Crystal Caves", xPercent: 29.3, yPercent: 59.2}},
        {imgSrc: "Images/GuessImages/Avalon16.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:avalon:Crystal Caves", xPercent: 78.3, yPercent: 35.9}},
        {imgSrc: "Images/GuessImages/Avalon17.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:avalon:Crystal Caves", xPercent: 83.8, yPercent: 48.9}},
        {imgSrc: "Images/GuessImages/Avalon18.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:avalon:Caliburn", xPercent: 43.9, yPercent: 37.7}},
        {imgSrc: "Images/GuessImages/Avalon19.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:avalon:Caliburn", xPercent: 24.5, yPercent: 64.3}},
        {imgSrc: "Images/GuessImages/Avalon20.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:avalon:Abbey Road", xPercent: 35.2, yPercent: 42.8}},
        {imgSrc: "Images/GuessImages/Avalon21.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:avalon:Abbey Road", xPercent: 48.9, yPercent: 40.1}},
        {imgSrc: "Images/GuessImages/Avalon22.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:avalon:The Wild", xPercent: 69.5, yPercent: 37.4}},
        {imgSrc: "Images/GuessImages/Avalon23.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:avalon:Caer Lyon", xPercent: 24.5, yPercent: 49.1}},
        {imgSrc: "Images/GuessImages/Avalon24.png", difficulty: Difficulty.EASY, mapSize: 100, solutionMarker: {key: "area:avalon:Caliburn", xPercent: 43.3, yPercent: 51.3}},
        {imgSrc: "Images/GuessImages/Avalon25.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:avalon:High Road", xPercent: 68.7, yPercent: 39.7}},
        {imgSrc: "Images/GuessImages/Avalon26.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:avalon:Caer Lyon", xPercent: 54.6, yPercent: 81.5}},
        {imgSrc: "Images/GuessImages/Avalon27.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:avalon:The Wild", xPercent: 68.9, yPercent: 55.2}},
    ],
    "azteca": [
        {imgSrc: "Images/GuessImages/Azteca1.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:azteca:Cloudburst Forest", xPercent: 28.1, yPercent: 45.7}},
        {imgSrc: "Images/GuessImages/Azteca2.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:azteca:Cloudburst Forest", xPercent: 22.3, yPercent: 74.3}},
        {imgSrc: "Images/GuessImages/Azteca3.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:azteca:Tierra De Brea", xPercent: 64.5, yPercent: 29.4}},
        {imgSrc: "Images/GuessImages/Azteca4.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:azteca:Tierra De Brea", xPercent: 14.6, yPercent: 27.0}},
        {imgSrc: "Images/GuessImages/Azteca5.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:azteca:Three Points", xPercent: 13.9, yPercent: 41.6}},
        {imgSrc: "Images/GuessImages/Azteca6.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:azteca:Tierra De Brea", xPercent: 40.7, yPercent: 38.3}},
        {imgSrc: "Images/GuessImages/Azteca7.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:azteca:Tierra De Brea", xPercent: 57.6, yPercent: 46.5}},
        {imgSrc: "Images/GuessImages/Azteca8.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:azteca:Tierra De Brea", xPercent: 21.6, yPercent: 74.3}},
        {imgSrc: "Images/GuessImages/Azteca9.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:azteca:Pitch Black Lake", xPercent: 62.3, yPercent: 69.8}},
        {imgSrc: "Images/GuessImages/Azteca10.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:azteca:Pitch Black Lake", xPercent: 39.9, yPercent: 75.9}},
        {imgSrc: "Images/GuessImages/Azteca11.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:azteca:Alto Alto", xPercent: 76.6, yPercent: 32.0}},
        {imgSrc: "Images/GuessImages/Azteca12.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:azteca:Floating Mountains", xPercent: 13.3, yPercent: 60.0}},
        {imgSrc: "Images/GuessImages/Azteca13.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:azteca:Floating Mountains", xPercent: 44.1, yPercent: 36.2}},
        {imgSrc: "Images/GuessImages/Azteca14.png", difficulty: Difficulty.GOOFY, mapSize: 100, solutionMarker: {key: "area:azteca:Floating Mountains", xPercent: 64.4, yPercent: 73.6}},
        {imgSrc: "Images/GuessImages/Azteca15.png", difficulty: Difficulty.GOOFY, mapSize: 100, solutionMarker: {key: "area:azteca:Twin Giants", xPercent: 16.5, yPercent: 37.0}},
        {imgSrc: "Images/GuessImages/Azteca16.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:azteca:Twin Giants", xPercent: 21.4, yPercent: 36.1}},
        {imgSrc: "Images/GuessImages/Azteca17.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:azteca:Twin Giants", xPercent: 74.0, yPercent: 30.3}},
        {imgSrc: "Images/GuessImages/Azteca18.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:azteca:Twin Giants", xPercent: 58.7, yPercent: 68.9}},
        {imgSrc: "Images/GuessImages/Azteca19.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:azteca:Cloudburst Forest", xPercent: 48.8, yPercent: 44.1}},
        {imgSrc: "Images/GuessImages/Azteca20.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:azteca:Mangrove Marsh", xPercent: 56.5, yPercent: 38.8}},
        {imgSrc: "Images/GuessImages/Azteca21.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:azteca:Cenote", xPercent: 48.0, yPercent: 56.2}},
        {imgSrc: "Images/GuessImages/Azteca22.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:azteca:Mangrove Marsh", xPercent: 35.5, yPercent: 22.3}},
        {imgSrc: "Images/GuessImages/Azteca23.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:azteca:Cenote", xPercent: 77.1, yPercent: 71.2}},
        {imgSrc: "Images/GuessImages/Azteca24.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:azteca:Mangrove Marsh", xPercent: 30.5, yPercent: 69.5}},
        {imgSrc: "Images/GuessImages/Azteca25.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:azteca:Saltmeadow Swamp", xPercent: 61.5, yPercent: 31.2}},
        {imgSrc: "Images/GuessImages/Azteca26.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:azteca:Saltmeadow Swamp", xPercent: 47.7, yPercent: 32.2}},
        {imgSrc: "Images/GuessImages/Azteca27.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:azteca:Saltmeadow Swamp", xPercent: 26.2, yPercent: 21.0}},
        {imgSrc: "Images/GuessImages/Azteca28.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:azteca:Saltmeadow Swamp", xPercent: 53.6, yPercent: 76.5}},
        {imgSrc: "Images/GuessImages/Azteca29.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:azteca:Cloudburst Forest", xPercent: 83.9, yPercent: 50.9}},
        {imgSrc: "Images/GuessImages/Azteca30.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:azteca:Zultun Dock", xPercent: 85.1, yPercent: 43.4}},
        {imgSrc: "Images/GuessImages/Azteca31.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:azteca:Zultun Dock", xPercent: 66.0, yPercent: 64.5}},
        {imgSrc: "Images/GuessImages/Azteca32.png", difficulty: Difficulty.EASY, mapSize: 100, solutionMarker: {key: "area:azteca:The Zocalo", xPercent: 80.1, yPercent: 25.5}},
        {imgSrc: "Images/GuessImages/Azteca33.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:azteca:The Zocalo", xPercent: 62.7, yPercent: 56.8}},
        {imgSrc: "Images/GuessImages/Azteca34.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:azteca:Three Points", xPercent: 32.3, yPercent: 62.7}},
        {imgSrc: "Images/GuessImages/Azteca35.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:azteca:The Zocalo", xPercent: 48.6, yPercent: 61.8}},
    ],
    "khrysalis": [
        {imgSrc: "Images/GuessImages/Khrysalis1.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:khrysalis:Crescent Beach", xPercent: 43.2, yPercent: 22.7}},
        {imgSrc: "Images/GuessImages/Khrysalis2.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:khrysalis:Sardonyx", xPercent: 59.5, yPercent: 72.3}},
        {imgSrc: "Images/GuessImages/Khrysalis3.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:khrysalis:Radiance Reborn", xPercent: 80.0, yPercent: 69.1}},
        {imgSrc: "Images/GuessImages/Khrysalis4.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:khrysalis:Radiance Reborn", xPercent: 44.7, yPercent: 31.5}},
        {imgSrc: "Images/GuessImages/Khrysalis5.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:khrysalis:Ruined Alcazar", xPercent: 40.9, yPercent: 69.8}},
        {imgSrc: "Images/GuessImages/Khrysalis6.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:khrysalis:Crescent Beach", xPercent: 55.3, yPercent: 19.5}},
        {imgSrc: "Images/GuessImages/Khrysalis7.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:khrysalis:Radiance Reborn", xPercent: 54.1, yPercent: 42.2}},
        {imgSrc: "Images/GuessImages/Khrysalis8.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:khrysalis:Sardonyx", xPercent: 63.3, yPercent: 58.9}},
        {imgSrc: "Images/GuessImages/Khrysalis9.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:khrysalis:Kondha Desert", xPercent: 32.0, yPercent: 65.6}},
        {imgSrc: "Images/GuessImages/Khrysalis10.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:khrysalis:Kondha Desert", xPercent: 34.7, yPercent: 25.2}},
        {imgSrc: "Images/GuessImages/Khrysalis11.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:khrysalis:Kondha Desert", xPercent: 33.2, yPercent: 46.9}},
        {imgSrc: "Images/GuessImages/Khrysalis12.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:khrysalis:Kondha Desert", xPercent: 43.5, yPercent: 57.2}},
        {imgSrc: "Images/GuessImages/Khrysalis13.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:khrysalis:The Hive", xPercent: 53.8, yPercent: 32.6}},
        {imgSrc: "Images/GuessImages/Khrysalis14.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:khrysalis:The Hive", xPercent: 53.8, yPercent: 54.7}},
        {imgSrc: "Images/GuessImages/Khrysalis15.png", difficulty: Difficulty.EASY, mapSize: 100, solutionMarker: {key: "area:khrysalis:Bastion", xPercent: 37.1, yPercent: 81.0}},
        {imgSrc: "Images/GuessImages/Khrysalis16.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:khrysalis:Bastion", xPercent: 67.4, yPercent: 54.9}},
        {imgSrc: "Images/GuessImages/Khrysalis17.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:khrysalis:Last Wood", xPercent: 22.4, yPercent: 60.6}},
        {imgSrc: "Images/GuessImages/Khrysalis18.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:khrysalis:Last Wood", xPercent: 64.5, yPercent: 64.7}},
        {imgSrc: "Images/GuessImages/Khrysalis19.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:khrysalis:Crescent Beach", xPercent: 57.8, yPercent: 65.3 }},
        {imgSrc: "Images/GuessImages/Khrysalis20.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:khrysalis:Fort Rachias", xPercent: 53.8, yPercent: 43.3}},
        {imgSrc: "Images/GuessImages/Khrysalis21.png", difficulty: Difficulty.VERY_HARD, mapSize: 100, solutionMarker: {key: "area:khrysalis:Tyrian Gorge", xPercent: 25.6, yPercent: 27.2}},
        {imgSrc: "Images/GuessImages/Khrysalis22.png", difficulty: Difficulty.MEDIUM, mapSize: 100, solutionMarker: {key: "area:khrysalis:Silent Market", xPercent: 35.8, yPercent: 61.1}},
        {imgSrc: "Images/GuessImages/Khrysalis23.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:khrysalis:Moon Cliffs", xPercent: 46.9, yPercent: 63.3}},
        {imgSrc: "Images/GuessImages/Khrysalis24.png", difficulty: Difficulty.HARD, mapSize: 100, solutionMarker: {key: "area:khrysalis:Crescent Beach", xPercent: 28.7, yPercent: 39.6}},
    ],
    // TODO: add more arc 1 guessImages
}