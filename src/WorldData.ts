export interface Area {
    name: string;
    imageSrc: string;
    top: string;
    left: string;
    width: string;
    height: string;
}

export interface World {
    name: string;
    class: string;
    iconSrc: string;
    mapSrc: string;
    areas: Area[];
}

export const worlds: World [] = [
    {
        name: "Wizard City",
        class: "wizard-city",
        iconSrc: "./Images/WorldIcons/(Icon)_Wizard_City.png",
        mapSrc: "./Images/Maps/WizardCity/WizardCity.png",
        areas: [
            { name: "Colossus Boulevard",  imageSrc: "./Images/Maps/WizardCity/ColossusBoulevard.png",  top: "40%", left: "69%", width: "16%", height: "10%" },
            { name: "Cyclops Lane",        imageSrc: "./Images/Maps/WizardCity/CyclopsLane.png",        top: "36%", left: "21%", width: "13%", height: "10%" },
            { name: "Dark Cave",           imageSrc: "./Images/Maps/WizardCity/DarkCave.png",           top: "50%", left: "30%", width: "10%", height: "10%" },
            { name: "Dark Cave",           imageSrc: "./Images/Maps/WizardCity/DarkCave.png",           top: "61%", left: "47%", width: "10%", height: "10%" },
            { name: "Firecat Alley",       imageSrc: "./Images/Maps/WizardCity/FirecatAlley.png",       top: "57%", left: "60%", width: "12%", height: "9%" },
            { name: "Golem Court",         imageSrc: "./Images/Maps/WizardCity/GolemCourt.png",         top: "18%", left: "34%", width: "11%", height: "9%" },
            { name: "Haunted Cave",        imageSrc: "./Images/Maps/WizardCity/HauntedCave.png",        top: "60%", left: "5%", width: "14%", height: "10%" },
            { name: "Nightside",           imageSrc: "./Images/Maps/WizardCity/Nightside.png",          top: "27%", left: "26%", width: "14%", height: "6%" },
            { name: "Olde Town",           imageSrc: "./Images/Maps/WizardCity/OldeTown.png",           top: "35%", left: "38%", width: "10%", height: "10%" },
            { name: "Pet Pavilion",        imageSrc: "./Images/Maps/WizardCity/PetPavilion.png",        top: "17%", left: "70%", width: "13%", height: "9%" },
            { name: "Ravenwood",           imageSrc: "./Images/Maps/WizardCity/Ravenwood.png",          top: "12%",  left: "50%", width: "16%", height: "5%" },
            { name: "Shopping District",   imageSrc: "./Images/Maps/WizardCity/ShoppingDistrict.png",   top: "37%", left: "51%", width: "15%", height: "10%" },
            { name: "The Commons",         imageSrc: "./Images/Maps/WizardCity/TheCommons.png",         top: "22%", left: "48%", width: "20%", height: "10%" },
            { name: "Triton Avenue",       imageSrc: "./Images/Maps/WizardCity/TritonAvenue.png",       top: "64%", left: "28%", width: "15%", height: "10%" },
            { name: "Unicorn Way",         imageSrc: "./Images/Maps/WizardCity/UnicornWay.png",         top: "27%", left: "76%", width: "13%", height: "9%" },
        ]
    },
    {
        name: "Krokotopia",
        class: "krokotopia",
        iconSrc: "./Images/WorldIcons/(Icon)_Krokotopia.png",
        mapSrc: "./Images/Maps/Krokotopia/Krokotopia.png",
        areas: [
            { name: "Ahnic Family Tomb",     imageSrc: "./Images/Maps/Krokotopia/AhnicFamilyTomb.png",    top: "78%", left: "9%",  width: "11%", height: "11%" },
            { name: "Altar of Kings",        imageSrc: "./Images/Maps/Krokotopia/AltarOfKings.png",       top: "15%",  left: "66%", width: "19%", height: "5%" },
            { name: "Chamber of Fire",       imageSrc: "./Images/Maps/Krokotopia/ChamberOfFire.png",      top: "22%", left: "56%", width: "13%", height: "8%" },
            { name: "Djeserit Family Tomb",  imageSrc: "./Images/Maps/Krokotopia/DjeseritFamilyTomb.png", top: "75%", left: "54%", width: "16%", height: "8%" },
            { name: "Entrance Hall",         imageSrc: "./Images/Maps/Krokotopia/EntranceHall.png",       top: "55%", left: "71%", width: "13%", height: "7%" },
            { name: "Grand Arena",           imageSrc: "./Images/Maps/Krokotopia/GrandArena.png",         top: "56%", left: "55%", width: "10%", height: "8%" },
            { name: "Hall of Champions",     imageSrc: "./Images/Maps/Krokotopia/HallOfChampions.png",    top: "66%", left: "62%", width: "16%", height: "8%" },
            { name: "Karanahn Barracks",     imageSrc: "./Images/Maps/Krokotopia/KaranahnBarracks.png",   top: "82%", left: "37%", width: "13%", height: "8%" },
            { name: "Krokosphinx",           imageSrc: "./Images/Maps/Krokotopia/Krokosphinx.png",        top: "49%", left: "65%", width: "23%", height: "6%" },
            { name: "Royal Hall",            imageSrc: "./Images/Maps/Krokotopia/RoyalHall.png",          top: "22%", left: "72%", width: "6%", height: "8%" },
            { name: "The Oasis",             imageSrc: "./Images/Maps/Krokotopia/TheOasis.png",           top: "30%", left: "15%", width: "20%", height: "6%" },
            { name: "Palace of Fire",        imageSrc: "./Images/Maps/Krokotopia/PalaceOfFire.png",       top: "21%", left: "82%", width: "11%", height: "8%" },
            { name: "Tomb of Storms",        imageSrc: "./Images/Maps/Krokotopia/TombOfStorms.png",       top: "69%", left: "21%", width: "31%", height: "5%" },
            { name: "Well of Spirits",       imageSrc: "./Images/Maps/Krokotopia/WellOfSpirits.png",      top: "74%", left: "25%", width: "22%", height: "5%" },
        ]
    },
    {
        name: "Marleybone",
        class: "marleybone",
        iconSrc: "./Images/WorldIcons/(Icon)_Marleybone.png",
        mapSrc: "./Images/Maps/Marleybone_Map.png",
        areas: []
    },
    {
        name: "Mooshu",
        class: "mooshu",
        iconSrc: "./Images/WorldIcons/(Icon)_Mooshu.png",
        mapSrc: "./Images/Maps/Mooshu_Map.png",
        areas: []
    },
    {
        name: "Dragonspyre",
        class: "dragonspyre",
        iconSrc: "./Images/WorldIcons/(Icon)_Dragonspyre.png",
        mapSrc: "./Images/Maps/Dragonspyre_Map.png",
        areas: []
    },
    {
        name: "Grizzleheim",
        class: "grizzleheim",
        iconSrc: "./Images/WorldIcons/(Icon)_Grizzleheim.png",
        mapSrc: "./Images/Maps/Grizzleheim_Map.png",
        areas: []
    },
    {
        name: "Wysteria",
        class: "wysteria",
        iconSrc: "./Images/WorldIcons/(Icon)_Wysteria.png",
        mapSrc: "./Images/Maps/Wysteria_Map.png",
        areas: []
    },
    {
        name: "Celestia",
        class: "celestia",
        iconSrc: "./Images/WorldIcons/(Icon)_Celestia.png",
        mapSrc: "./Images/Maps/Celestia_Map.png",
        areas: []
    },
    {
        name: "Zafaria",
        class: "zafaria",
        iconSrc: "./Images/WorldIcons/(Icon)_Zafaria.png",
        mapSrc: "./Images/Maps/Zafaria_Map.png",
        areas: []
    },
    {
        name: "Avalon",
        class: "avalon",
        iconSrc: "./Images/WorldIcons/(Icon)_Avalon.png",
        mapSrc: "./Images/Maps/Avalon_Map.png",
        areas: []
    },
    {
        name: "Azteca",
        class: "azteca",
        iconSrc: "./Images/WorldIcons/(Icon)_Azteca.png",
        mapSrc: "./Images/Maps/Azteca_Map.png",
        areas: []
    },
    {
        name: "Khrysalis",
        class: "khrysalis",
        iconSrc: "./Images/WorldIcons/(Icon)_Khrysalis.png",
        mapSrc: "./Images/Maps/Khrysalis_Map.png",
        areas: []
    },
];