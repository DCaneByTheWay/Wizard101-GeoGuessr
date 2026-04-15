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
            { name: "Colossus Boulevard",  imageSrc: "./Images/Maps/WizardCity/ColossusBoulevard.png",  top: "51%", left: "69%", width: "16%", height: "11%" },
            { name: "Cyclops Lane",        imageSrc: "./Images/Maps/WizardCity/CyclopsLane.png",        top: "45%", left: "21%", width: "13%", height: "12%" },
            { name: "Dark Cave",           imageSrc: "./Images/Maps/WizardCity/DarkCave.png",           top: "64%", left: "30%", width: "10%", height: "12%" },
            { name: "Dark Cave",           imageSrc: "./Images/Maps/WizardCity/DarkCave.png",           top: "77%", left: "47%", width: "10%", height: "12%" },
            { name: "Firecat Alley",       imageSrc: "./Images/Maps/WizardCity/FirecatAlley.png",       top: "72%", left: "60%", width: "12%", height: "11%" },
            { name: "Golem Court",         imageSrc: "./Images/Maps/WizardCity/GolemCourt.png",         top: "22%", left: "34%", width: "11%", height: "12%" },
            { name: "Haunted Cave",        imageSrc: "./Images/Maps/WizardCity/HauntedCave.png",        top: "75%", left: "5%", width: "14%", height: "12%" },
            { name: "Nightside",           imageSrc: "./Images/Maps/WizardCity/Nightside.png",          top: "34%", left: "26%", width: "14%", height: "8%" },
            { name: "Olde Town",           imageSrc: "./Images/Maps/WizardCity/OldeTown.png",           top: "44%", left: "38%", width: "10%", height: "12%" },
            { name: "Pet Pavilion",        imageSrc: "./Images/Maps/WizardCity/PetPavilion.png",        top: "21%", left: "70%", width: "13%", height: "12%" },
            { name: "Ravenwood",           imageSrc: "./Images/Maps/WizardCity/Ravenwood.png",          top: "15%",  left: "50%", width: "16%", height: "7%" },
            { name: "Shopping District",   imageSrc: "./Images/Maps/WizardCity/ShoppingDistrict.png",   top: "47%", left: "51%", width: "15%", height: "12%" },
            { name: "The Commons",         imageSrc: "./Images/Maps/WizardCity/TheCommons.png",         top: "27%", left: "48%", width: "20%", height: "13%" },
            { name: "Triton Avenue",       imageSrc: "./Images/Maps/WizardCity/TritonAvenue.png",       top: "80%", left: "28%", width: "15%", height: "13%" },
            { name: "Unicorn Way",         imageSrc: "./Images/Maps/WizardCity/UnicornWay.png",         top: "33%", left: "76%", width: "13%", height: "12%" },
        ]
    },
    {
        name: "Krokotopia",
        class: "krokotopia",
        iconSrc: "./Images/WorldIcons/(Icon)_Krokotopia.png",
        mapSrc: "./Images/Maps/Krokotopia_Map.png",
        areas: []
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