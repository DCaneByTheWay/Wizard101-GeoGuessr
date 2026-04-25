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

export interface Arc {
    name: string;
    worlds: string[];
}


export const arcs: Arc[] = [
    {name: "Arc 1", worlds: ["wizard-city", "krokotopia", "marleybone", "mooshu", "dragonspyre"]},
    {name: "Arc 2", worlds: ["celestia", "zafaria", "avalon", "azteca", "khrysalis"]},
    {name: "Arc 3", worlds: ["polaris", "mirage", "empyrea"]},
    {name: "Side Quest", worlds: ["grizzleheim", "wysteria"]},
]

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
            { name: "Firecat Alley",       imageSrc: "./Images/Maps/WizardCity/FirecatAlley.png",       top: "57%", left: "60%", width: "12%", height: "9%"  },
            { name: "Golem Court",         imageSrc: "./Images/Maps/WizardCity/GolemCourt.png",         top: "18%", left: "34%", width: "11%", height: "9%"  },
            { name: "Haunted Cave",        imageSrc: "./Images/Maps/WizardCity/HauntedCave.png",        top: "60%", left: "5%",  width: "14%", height: "10%" },
            { name: "Nightside",           imageSrc: "./Images/Maps/WizardCity/Nightside.png",          top: "27%", left: "26%", width: "14%", height: "6%"  },
            { name: "Olde Town",           imageSrc: "./Images/Maps/WizardCity/OldeTown.png",           top: "35%", left: "38%", width: "10%", height: "10%" },
            { name: "Pet Pavilion",        imageSrc: "./Images/Maps/WizardCity/PetPavilion.png",        top: "17%", left: "70%", width: "13%", height: "9%"  },
            { name: "Ravenwood",           imageSrc: "./Images/Maps/WizardCity/Ravenwood.png",          top: "12%", left: "50%", width: "16%", height: "5%"  },
            { name: "Shopping District",   imageSrc: "./Images/Maps/WizardCity/ShoppingDistrict.png",   top: "37%", left: "51%", width: "15%", height: "10%" },
            { name: "The Commons",         imageSrc: "./Images/Maps/WizardCity/TheCommons.png",         top: "22%", left: "48%", width: "20%", height: "10%" },
            { name: "Triton Avenue",       imageSrc: "./Images/Maps/WizardCity/TritonAvenue.png",       top: "64%", left: "28%", width: "15%", height: "10%" },
            { name: "Unicorn Way",         imageSrc: "./Images/Maps/WizardCity/UnicornWay.png",         top: "27%", left: "76%", width: "13%", height: "9%"  },
        ]
    },
    {
        name: "Krokotopia",
        class: "krokotopia",
        iconSrc: "./Images/WorldIcons/(Icon)_Krokotopia.png",
        mapSrc: "./Images/Maps/Krokotopia/Krokotopia.png",
        areas: [
            { name: "Ahnic Family Tomb",     imageSrc: "./Images/Maps/Krokotopia/AhnicFamilyTomb.png",    top: "78%", left: "9%",  width: "11%", height: "11%" },
            { name: "Altar of Kings",        imageSrc: "./Images/Maps/Krokotopia/AltarOfKings.png",       top: "15%", left: "66%", width: "19%", height: "5%"  },
            { name: "Chamber of Fire",       imageSrc: "./Images/Maps/Krokotopia/ChamberOfFire.png",      top: "22%", left: "56%", width: "13%", height: "8%"  },
            { name: "Djeserit Family Tomb",  imageSrc: "./Images/Maps/Krokotopia/DjeseritFamilyTomb.png", top: "75%", left: "54%", width: "16%", height: "8%"  },
            { name: "Entrance Hall",         imageSrc: "./Images/Maps/Krokotopia/EntranceHall.png",       top: "55%", left: "71%", width: "13%", height: "7%"  },
            { name: "Grand Arena",           imageSrc: "./Images/Maps/Krokotopia/GrandArena.png",         top: "56%", left: "55%", width: "10%", height: "8%"  },
            { name: "Hall of Champions",     imageSrc: "./Images/Maps/Krokotopia/HallOfChampions.png",    top: "66%", left: "62%", width: "16%", height: "8%"  },
            { name: "Karanahn Barracks",     imageSrc: "./Images/Maps/Krokotopia/KaranahnBarracks.png",   top: "82%", left: "37%", width: "13%", height: "8%"  },
            { name: "Krokosphinx",           imageSrc: "./Images/Maps/Krokotopia/Krokosphinx.png",        top: "49%", left: "65%", width: "23%", height: "6%"  },
            { name: "Royal Hall",            imageSrc: "./Images/Maps/Krokotopia/RoyalHall.png",          top: "22%", left: "72%", width: "6%",  height: "8%"  },
            { name: "The Oasis",             imageSrc: "./Images/Maps/Krokotopia/TheOasis.png",           top: "30%", left: "15%", width: "20%", height: "6%"  },
            { name: "Palace of Fire",        imageSrc: "./Images/Maps/Krokotopia/PalaceOfFire.png",       top: "21%", left: "82%", width: "11%", height: "8%"  },
            { name: "Tomb of Storms",        imageSrc: "./Images/Maps/Krokotopia/TombOfStorms.png",       top: "69%", left: "21%", width: "31%", height: "5%"  },
            { name: "Well of Spirits",       imageSrc: "./Images/Maps/Krokotopia/WellOfSpirits.png",      top: "74%", left: "25%", width: "22%", height: "5%"  },
        ]
    },
    {
        name: "Marleybone",
        class: "marleybone",
        iconSrc: "./Images/WorldIcons/(Icon)_Marleybone.png",
        mapSrc: "./Images/Maps/Marleybone/Marleybone.png",
        areas: [
            { name: "Chelsea Court",       imageSrc: "./Images/Maps/Marleybone/ChelseaCourt.png",       top: "16%", left: "20%", width: "13%", height: "9%"  },
            { name: "Digmoore Station",    imageSrc: "./Images/Maps/Marleybone/DigmooreStation.png",    top: "31%", left: "16%", width: "21%", height: "10%" },
            { name: "Hyde Park",           imageSrc: "./Images/Maps/Marleybone/HydePark.png",           top: "18%", left: "34%", width: "9%",  height: "9%"  },
            { name: "Knights Court",       imageSrc: "./Images/Maps/Marleybone/KnightsCourt.png",       top: "18%", left: "80%", width: "13%", height: "9%"  },
            { name: "Newgate Prison",      imageSrc: "./Images/Maps/Marleybone/NewgatePrison.png",      top: "18%", left: "63%", width: "14%", height: "9%"  },
            { name: "Regents Square",      imageSrc: "./Images/Maps/Marleybone/RegentsSquare.png",      top: "40%", left: "45%", width: "17%", height: "10%" },
            { name: "Royal Museum",        imageSrc: "./Images/Maps/Marleybone/RoyalMuseum.png",        top: "59%", left: "44%", width: "18%", height: "10%" },
            { name: "Scotland Yard Roof",  imageSrc: "./Images/Maps/Marleybone/ScotlandYardRoof.png",   top: "31%", left: "67%", width: "24%", height: "10%" },
        ]
    },
    {
        name: "Mooshu",
        class: "mooshu",
        iconSrc: "./Images/WorldIcons/(Icon)_MooShu.png",
        mapSrc: "./Images/Maps/Mooshu/Mooshu.png",
        areas: [
            { name: "Ancient Burial Grounds", imageSrc: "./Images/Maps/Mooshu/AncientBurialGrounds.png", top: "22%", left: "81%", width: "13%", height: "12%" },
            { name: "Cave of Solitude",       imageSrc: "./Images/Maps/Mooshu/CaveOfSolitude.png",       top: "9%",  left: "38%", width: "14%", height: "9%"  },
            { name: "Hametsu Village",        imageSrc: "./Images/Maps/Mooshu/HametsuVillage.png",       top: "45%", left: "46%", width: "17%", height: "10%" },
            { name: "Jade Palace",            imageSrc: "./Images/Maps/Mooshu/JadePalace.png",           top: "15%", left: "59%", width: "15%", height: "10%" },
            { name: "Kishibe Village",        imageSrc: "./Images/Maps/Mooshu/KishibeVillage.png",       top: "33%", left: "13%", width: "13%", height: "9%"  },
            { name: "Shoshun Village",        imageSrc: "./Images/Maps/Mooshu/ShoshunVillage.png",       top: "30%", left: "32%", width: "20%", height: "10%" },
            { name: "Tatakai Outpost",        imageSrc: "./Images/Maps/Mooshu/TatakaiOutpost.png",       top: "60%", left: "37%", width: "13%", height: "9%"  },
            { name: "Village of Sorrow",      imageSrc: "./Images/Maps/Mooshu/VillageOfSorrow.png",      top: "54%", left: "75%", width: "15%", height: "9%"  },
            { name: "Yoshihito Temple",       imageSrc: "./Images/Maps/Mooshu/YoshihitoTemple.png",      top: "32%", left: "61%", width: "21%", height: "10%" },
        ]
    },
    {
        name: "Dragonspyre",
        class: "dragonspyre",
        iconSrc: "./Images/WorldIcons/(Icon)_Dragonspyre.png",
        mapSrc: "./Images/Maps/Dragonspyre/Dragonspryre.png",
        areas: [
            { name: "Dragonspyre Academy",  imageSrc: "./Images/Maps/Dragonspyre/DragonspyreAcademy.png",  top: "7%",  left: "67%", width: "24%", height: "10%" },
            { name: "Dragons Roost",        imageSrc: "./Images/Maps/Dragonspyre/DragonsRoost.png",        top: "19%", left: "60%", width: "13%", height: "9%"  },
            { name: "Plaza of Conquests",   imageSrc: "./Images/Maps/Dragonspyre/PlazaOfConquests.png",    top: "41%", left: "53%", width: "16%", height: "9%"  },
            { name: "The Atheneum",         imageSrc: "./Images/Maps/Dragonspyre/TheAtheneum.png",         top: "37%", left: "11%", width: "20%", height: "10%" },
            { name: "The Basilica",         imageSrc: "./Images/Maps/Dragonspyre/TheBasilica.png",         top: "82%", left: "67%", width: "17%", height: "10%" },
            { name: "The Crucible",         imageSrc: "./Images/Maps/Dragonspyre/TheCrucible.png",         top: "28%", left: "81%", width: "13%", height: "9%"  },
            { name: "The Crystal Grove",    imageSrc: "./Images/Maps/Dragonspyre/TheCrystalGrove.png",     top: "28%", left: "64%", width: "16%", height: "9%"  },
            { name: "The Drake Hatchery",   imageSrc: "./Images/Maps/Dragonspyre/TheDrakeHatchery.png",    top: "52%", left: "85%", width: "15%", height: "9%"  },
            { name: "The Forum",            imageSrc: "./Images/Maps/Dragonspyre/TheForum.png",            top: "18%", left: "84%", width: "11%", height: "10%" },
            { name: "The Grand Chasm",      imageSrc: "./Images/Maps/Dragonspyre/TheGrandChasm.png",       top: "48%", left: "1%",  width: "14%", height: "9%"  },
            { name: "The Necropolis",       imageSrc: "./Images/Maps/Dragonspyre/TheNecropolis.png",       top: "40%", left: "75%", width: "23%", height: "10%" },
            { name: "The Tower Archives",   imageSrc: "./Images/Maps/Dragonspyre/TheTowerArchives.png",    top: "25%", left: "0%",  width: "15%", height: "9%"  },
        ]
    },
    {
        name: "Grizzleheim",
        class: "grizzleheim",
        iconSrc: "./Images/WorldIcons/(Icon)_Grizzleheim.png",
        mapSrc: "./Images/Maps/Grizzleheim/Grizzleheim.png",
        areas: [
            { name: "Mirkholm Keep",    imageSrc: "./Images/Maps/Grizzleheim/MirkholmKeep.png",    top: "28%", left: "68%", width: "13%", height: "9%"  },
            { name: "Nidavellir",       imageSrc: "./Images/Maps/Grizzleheim/Nidavellir.png",      top: "59%", left: "71%", width: "16%", height: "6%"  },
            { name: "Northguard",       imageSrc: "./Images/Maps/Grizzleheim/Northguard.png",      top: "42%", left: "47%", width: "23%", height: "7%"  },
            { name: "Ravenscar",        imageSrc: "./Images/Maps/Grizzleheim/Ravenscar.png",       top: "51%", left: "28%", width: "14%", height: "5%"  },
            { name: "Savarstaad Pass",  imageSrc: "./Images/Maps/Grizzleheim/SavarstaadPass.png",  top: "42%", left: "77%", width: "15%", height: "10%" },
            { name: "Vigrid Roughland", imageSrc: "./Images/Maps/Grizzleheim/VigridRoughland.png", top: "37%", left: "28%", width: "15%", height: "9%"  },
        ]
    },
    {
        name: "Celestia",
        class: "celestia",
        iconSrc: "./Images/WorldIcons/(Icon)_Celestia.png",
        mapSrc: "./Images/Maps/Celestia/Celestia.png",
        areas: [
            { name: "Celestia Base Camp",    imageSrc: "./Images/Maps/Celestia/CelestiaBaseCamp.png",   top: "41%", left: "40%", width: "21%", height: "11%" },
            { name: "Crustacean Empire",     imageSrc: "./Images/Maps/Celestia/CrustaceanEmpire.png",   top: "21%", left: "41%", width: "17%", height: "11%" },
            { name: "District of the Stars", imageSrc: "./Images/Maps/Celestia/DistrictOfTheStars.png", top: "49%", left: "73%", width: "16%", height: "12%" },
            { name: "Science Center",        imageSrc: "./Images/Maps/Celestia/ScienceCenter.png",      top: "59%", left: "38%", width: "14%", height: "10%" },
            { name: "Stormriven",            imageSrc: "./Images/Maps/Celestia/Stormriven.png",         top: "68%", left: "63%", width: "18%", height: "5%"  },
            { name: "Stormriven Hall",       imageSrc: "./Images/Maps/Celestia/StormrivenHall.png",     top: "83%", left: "64%", width: "17%", height: "10%" },
            { name: "Survey Camp",           imageSrc: "./Images/Maps/Celestia/SurveyCamp.png",         top: "25%", left: "25%", width: "14%", height: "9%"  },
            { name: "The Floating Land",     imageSrc: "./Images/Maps/Celestia/TheFloatingLand.png",    top: "36%", left: "7%",  width: "19%", height: "9%"  },
            { name: "The Grotto",            imageSrc: "./Images/Maps/Celestia/TheGrotto.png",          top: "6%",  left: "41%", width: "14%", height: "9%"  },
        ]
    },
    {
        name: "Wysteria",
        class: "wysteria",
        iconSrc: "./Images/WorldIcons/(Icon)_Wysteria.png",
        mapSrc: "./Images/Maps/Wysteria/Wysteria.png",
        areas: [
            { name: "Pegasus Place",    imageSrc: "./Images/Maps/Wysteria/PegasusPlace.png",    top: "16%", left: "19%", width: "14%", height: "10%" },
            { name: "Pigswick Academy", imageSrc: "./Images/Maps/Wysteria/PigswickAcademy.png", top: "47%", left: "35%", width: "19%", height: "10%" },
            { name: "Tanglewood Way",   imageSrc: "./Images/Maps/Wysteria/TanglewoodWay.png",   top: "67%", left: "7%",  width: "18%", height: "10%" },
        ]
    },
    {
        name: "Zafaria",
        class: "zafaria",
        iconSrc: "./Images/WorldIcons/(Icon)_Zafaria.png",
        mapSrc: "./Images/Maps/Zafaria/Zafaria.png",
        areas: [
            { name: "Baobab Crossroads",  imageSrc: "./Images/Maps/Zafaria/BaobabCrossroads.png",  top: "52%", left: "27%", width: "23%", height: "11%" },
            { name: "Baobab Market",      imageSrc: "./Images/Maps/Zafaria/BaobabMarket.png",      top: "53%", left: "56%", width: "12%", height: "9%"  },
            { name: "Drum Jungle",        imageSrc: "./Images/Maps/Zafaria/DrumJungle.png",        top: "27%", left: "67%", width: "11%", height: "9%"  },
            { name: "Elephant Graveyard", imageSrc: "./Images/Maps/Zafaria/ElephantGraveyard.png", top: "10%", left: "56%", width: "14%", height: "9%"  },
            { name: "Savannah",           imageSrc: "./Images/Maps/Zafaria/Savannah.png",          top: "77%", left: "28%", width: "13%", height: "6%"  },
            { name: "Stone Town",         imageSrc: "./Images/Maps/Zafaria/StoneTown.png",         top: "53%", left: "74%", width: "10%", height: "9%"  },
            { name: "Waterfront",         imageSrc: "./Images/Maps/Zafaria/Waterfront.png",        top: "42%", left: "78%", width: "17%", height: "7%"  },
            { name: "Zamunda",            imageSrc: "./Images/Maps/Zafaria/Zamunda.png",           top: "36%", left: "6%",  width: "13%", height: "6%"  },
            { name: "Zamunda Outskirts",  imageSrc: "./Images/Maps/Zafaria/ZamundaOutskirts.png",  top: "54%", left: "4%",  width: "15%", height: "9%"  },
        ]
    },
    {
        name: "Avalon",
        class: "avalon",
        iconSrc: "./Images/WorldIcons/(Icon)_Avalon.png",
        mapSrc: "./Images/Maps/Avalon/Avalon.png",
        areas: [
            { name: "Abbey Road",    imageSrc: "./Images/Maps/Avalon/AbbeyRoad.png",    top: "65%", left: "79%", width: "10%", height: "9%"  },
            { name: "Caer Lyon",     imageSrc: "./Images/Maps/Avalon/CaerLyon.png",     top: "43%", left: "56%", width: "10%", height: "9%"  },
            { name: "Caliburn",      imageSrc: "./Images/Maps/Avalon/Caliburn.png",     top: "75%", left: "55%", width: "16%", height: "7%"  },
            { name: "Catacombs",     imageSrc: "./Images/Maps/Avalon/Catacombs.png",    top: "43%", left: "79%", width: "16%", height: "6%"  },
            { name: "Crystal Caves", imageSrc: "./Images/Maps/Avalon/CrystalCaves.png", top: "53%", left: "82%", width: "12%", height: "9%"  },
            { name: "Deepwater",     imageSrc: "./Images/Maps/Avalon/Deepwater.png",    top: "34%", left: "80%", width: "15%", height: "6%"  },
            { name: "Dun Dara",      imageSrc: "./Images/Maps/Avalon/DunDara.png",      top: "24%", left: "14%", width: "9%",  height: "9%"  },
            { name: "High Road",     imageSrc: "./Images/Maps/Avalon/HighRoad.png",     top: "61%", left: "50%", width: "9%",  height: "9%"  },
            { name: "LakeShore",     imageSrc: "./Images/Maps/Avalon/LakeShore.png",    top: "25%", left: "74%", width: "16%", height: "6%"  },
            { name: "Outer Yard",    imageSrc: "./Images/Maps/Avalon/OuterYard.png",    top: "28%", left: "50%", width: "10%", height: "9%"  },
            { name: "The Wild",      imageSrc: "./Images/Maps/Avalon/TheWild.png",      top: "45%", left: "38%", width: "9%",  height: "9%"  },
            { name: "The Wyrd",      imageSrc: "./Images/Maps/Avalon/TheWyrd.png",      top: "35%", left: "26%", width: "10%", height: "10%" },
        ]
    },
    {
        name: "Azteca",
        class: "azteca",
        iconSrc: "./Images/WorldIcons/(Icon)_Azteca.png",
        mapSrc: "./Images/Maps/Azteca/Azteca.png",
        areas: [
            { name: "Alto Alto",          imageSrc: "./Images/Maps/Azteca/AltoAlto.png",          top: "61%", left: "28%", width: "9%",  height: "9%"  },
            { name: "Cenote",             imageSrc: "./Images/Maps/Azteca/Cenote.png",            top: "60%", left: "42%", width: "10%", height: "6%"  },
            { name: "Cloudburst Forest",  imageSrc: "./Images/Maps/Azteca/CloudburstForest.png",  top: "77%", left: "19%", width: "16%", height: "9%"  },
            { name: "Floating Mountains", imageSrc: "./Images/Maps/Azteca/FloatingMountains.png", top: "60%", left: "72%", width: "15%", height: "9%"  },
            { name: "Mangrove Marsh",     imageSrc: "./Images/Maps/Azteca/MangroveMarsh.png",     top: "22%", left: "37%", width: "15%", height: "9%"  },
            { name: "Pitch Black Lake",   imageSrc: "./Images/Maps/Azteca/PitchBlackLake.png",    top: "53%", left: "2%",  width: "16%", height: "9%"  },
            { name: "Saltmeadow Swamp",   imageSrc: "./Images/Maps/Azteca/SaltmeadowSwamp.png",   top: "36%", left: "14%", width: "15%", height: "9%"  },
            { name: "The Zocalo",         imageSrc: "./Images/Maps/Azteca/TheZocalo.png",         top: "39%", left: "55%", width: "15%", height: "9%"  },
            { name: "Three Points",       imageSrc: "./Images/Maps/Azteca/ThreePoints.png",       top: "49%", left: "40%", width: "12%", height: "9%"  },
            { name: "Tierra De Brea",     imageSrc: "./Images/Maps/Azteca/TierraDeBrea.png",      top: "65%", left: "9%",  width: "13%", height: "9%"  },
            { name: "Twin Giants",        imageSrc: "./Images/Maps/Azteca/TwinGiants.png",        top: "14%", left: "81%", width: "10%", height: "9%"  },
            { name: "Zultun Dock",        imageSrc: "./Images/Maps/Azteca/ZultunDock.png",        top: "81%", left: "49%", width: "12%", height: "8%"  },
        ]
    },
    {
        name: "Khrysalis",
        class: "khrysalis",
        iconSrc: "./Images/WorldIcons/(Icon)_Khrysalis.png",
        mapSrc: "./Images/Maps/Khrysalis/Khrysalis.png",
        areas: [
            { name: "Bastion",         imageSrc: "./Images/Maps/Khrysalis/Bastion.png",        top: "86%", left: "76%", width: "17%", height: "7%" },
            { name: "Crescent Beach",  imageSrc: "./Images/Maps/Khrysalis/CrescentBeach.png",  top: "61%", left: "19%", width: "14%", height: "9%" },
            { name: "Fort Rachias",    imageSrc: "./Images/Maps/Khrysalis/FortRachias.png",    top: "60%", left: "45%", width: "13%", height: "9%" },
            { name: "Kondha Desert",   imageSrc: "./Images/Maps/Khrysalis/KondhaDesert.png",   top: "11%", left: "45%", width: "13%", height: "9%" },
            { name: "Last Wood",       imageSrc: "./Images/Maps/Khrysalis/LastWood.png",       top: "42%", left: "79%", width: "10%", height: "9%" },
            { name: "Moon Cliffs",     imageSrc: "./Images/Maps/Khrysalis/MoonCliffs.png",     top: "57%", left: "80%", width: "11%", height: "9%" },
            { name: "Radiance Reborn", imageSrc: "./Images/Maps/Khrysalis/RadianceReborn.png", top: "26%", left: "72%", width: "14%", height: "9%" },
            { name: "Ruined Alcazar",  imageSrc: "./Images/Maps/Khrysalis/RuinedAlcazar.png",  top: "46%", left: "47%", width: "14%", height: "9%" },
            { name: "Sardonyx",        imageSrc: "./Images/Maps/Khrysalis/Sardonyx.png",       top: "26%", left: "46%", width: "15%", height: "7%" },
            { name: "Shadow Palace",   imageSrc: "./Images/Maps/Khrysalis/ShadowPalace.png",   top: "39%", left: "14%", width: "14%", height: "9%" },
            { name: "Silent Market",   imageSrc: "./Images/Maps/Khrysalis/SilentMarket.png",   top: "84%", left: "56%", width: "13%", height: "9%" },
            { name: "The Hive",        imageSrc: "./Images/Maps/Khrysalis/TheHive.png",        top: "11%", left: "25%", width: "10%", height: "9%" },
            { name: "Tyrian Gorge",    imageSrc: "./Images/Maps/Khrysalis/TyrianGorge.png",    top: "75%", left: "42%", width: "14%", height: "9%" },
        ]
    },
];