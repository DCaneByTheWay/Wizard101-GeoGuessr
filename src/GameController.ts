import { getLevelKey, getTransform } from "./ZoomController.js";
import { Difficulty, guessImages, GuessImage } from "./ImageData.js";
import { Area, worlds } from "./WorldData.js";

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
]

const markerSize = 30;
const imageElement = document.getElementById("guess-image") as HTMLImageElement;
const imageWrapper = imageElement?.parentElement;
// disable drag on spiral and children
imageElement!.ondragstart = () => false;

const container = document.getElementById("Spiral");
container!.addEventListener("click", placeMarker);

let pointerDownPos: {x: number, y: number} | null = null
const DRAG_THRESHOLD = 5; // pixels of drag

container!.addEventListener("pointerdown", (e) => {
    pointerDownPos = {x: e.clientX, y: e.clientY};
});

document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    submitGuess();
    e.preventDefault(); 
  }
});

const MARKER_SRC = "./Images/Markers/(Icon)_Shadow.png";
const ANSWER_MARKER_SRC = "./Images/Markers/(Icon)_Quests.png";

let currentMarker: {key: string, xPercent: number, yPercent: number} | null = null;

const submitAnswerButton = document.getElementById("submit-guess-button");
const scoreDisplay = document.getElementById("score-display");
const scoreBreakdown = document.getElementById("score-breakdown");

let currentGuessImage: GuessImage | null = null;

// max score for a perfect guess
const MAX_SCORE = 5000;

// weights of each of the components of a guess (out of 1)
const WORLD_VALUE_WEIGHT = 0.1;
const AREA_VALUE_WEIGHT = 0.15;

// score values 
const WORLD_SCORE = MAX_SCORE * WORLD_VALUE_WEIGHT;
const AREA_SCORE = MAX_SCORE * AREA_VALUE_WEIGHT;
const MAXIMUM_DISTANCE_SCORE = MAX_SCORE - (WORLD_SCORE + AREA_SCORE);

export function setBackgroundImage(src: string): void {
    if (imageElement) {
        imageWrapper?.classList.add("spinner-container");
        imageWrapper?.classList.remove("loaded");
        imageElement.onload = () => {
            imageWrapper?.classList.add("loaded");
        }
        imageElement.src = src;
    }
}

export function startRound(imgSrc: string): void {
    setBackgroundImage(imgSrc);
    // TODO: add actual game logic
}

/** Submits location of current marker */
export function submitGuess(): void {
    // return early if no marker placed yet
    if (!currentMarker) return

    console.log("submitted!");
    const answerMark = currentGuessImage?.solutionMarker!;
    const score = getCalculatedScore(currentMarker, answerMark);

    scoreDisplay!.textContent = `You Scored ${score.toFixed(0).toString()}/${MAX_SCORE}!`;
    console.log(`current hovered area: ${getHoveredArea(currentMarker)?.name}`)

    //scoreBreakdown!.textContent = `Correct World: `; //TODO: make breakdown
}

/** Takes two marks and returns distance */
function getMarkDistance(
    mark1: {key: string, xPercent: number, yPercent: number}, 
    mark2: {key: string, xPercent: number, yPercent: number}
): number {
    
    const dx = mark1.xPercent - mark2.xPercent;
    const dy = mark1.yPercent - mark2.yPercent;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance
}

/** Takes mark and returns area it is hovering (if mark is in world level) */
function getHoveredArea(mark: {key: string, xPercent: number, yPercent: number}): Area | null {

    // if mark is in spiral level
    if (mark.key === "spiral") {
        // TODO: return world icon that the mark is hovering, or create new function to do this
    }
    // if mark is in world level
    else if (mark.key.includes("world")) {
        const worldClass = mark.key.replace("world:", ""); // world:wizard-city
    
        // get world
        const world = worlds.find(w => w.class === worldClass);
    
        // return early if there is no world of that class
        if (!world) return null;
    
        // iterate through areas
        for (const area of world.areas) {
            // get area info
            const areaLeft = parseFloat(area.left);
            const areaTop = parseFloat(area.top);
            const areaWidth = parseFloat(area.width);
            const areaHeight = parseFloat(area.height);
    
            // return area if mark pos is within area region
            if (
                mark.xPercent >= areaLeft && mark.xPercent <= areaLeft + areaWidth &&
                mark.yPercent >= areaTop && mark.yPercent <= areaTop + areaHeight
            ) {
                return area
            }
        }
        
    }
    // if mark is in area level
    else if (mark.key.includes("area")) {
        // not implemented, not needed (i think)
    }

    // return null if mark is in no area
    return null;
}

/** Takes distance and returns score calculation with constant values */
function getDistanceScoreCalculation(distance: number): number {
    // derived from actual geoguessr score calculation
    return WORLD_SCORE + AREA_SCORE + MAXIMUM_DISTANCE_SCORE * Math.E ** (-6.7 * distance/currentGuessImage?.mapSize!)
}

/** Takes guessMark and answerMark, and returns score for the round */
export function getCalculatedScore(
    guessMark: {key: string, xPercent: number, yPercent: number},
    answerMark: {key: string, xPercent: number, yPercent: number}
): number {

    /*
    Scoring System:
    (out of 100%)
    Correct World:    <= 10%
    Correct Area:     <= 15%
    Correct Distance: >= 75% 


    Guess at spiral level:
    (World only guess)
    MAX score: 10% score

    Guess at world level:
    (World and Area only guess)
    Marker is calculated at 50% distance away from answer marker
    MAX score: 10% + 15% + (50% distance value)% = ?% score

    Guess at area level:
    (World, Area, and distance guess)
    MAX score: 10% + 15% + 75% = 100% score
    */
    
    let score = 0;

    // if guess marker is at spiral level
    if (guessMark.key === "spiral") {
        // TODO: implement logic to find if marker is on world icon
    }

    // if guess marker is at world level
    else if (guessMark.key.includes("world")) {

        // get world from guess mark
        const guessedWorld = guessMark.key.replace("world:", ""); // world:wizard-city
        
        // if guessed world in answer mark key
        // EX: 'marleybone' in 'area:marleybone:Royal Museum'
        if (answerMark.key.includes(guessedWorld)) {
            // add world score if world is correct
            score += WORLD_SCORE;
        }

        // add area score if area hotspot hovered is correct
        const hoveredArea = getHoveredArea(guessMark);

        // if there is an area hovered
        if (hoveredArea) {
            // if hovered area is in answer mark key
            if (answerMark.key.includes(hoveredArea.name)) {

                // add score from 50% distance
                const distance = 50;
                score += getDistanceScoreCalculation(distance);
            }
        }
    }

    // if guess marker is at area level
    else if (guessMark.key.includes("area")) {
        
        const [, guessWorld, guessArea] = guessMark.key.split(":");
        const [, answerWorld, answerArea] = answerMark.key.split(":");


        // if world incorrect
        if (guessWorld !== answerWorld) {
            console.log('incorrect world')
            console.log(`guess: '${guessWorld}', answer: '${answerWorld}'`)
            score = 0;
        }
        // if world correct and area incorrect
        else if (guessArea !== answerArea) {
            console.log('correct world, incorrect area')
            console.log(`guess: '${guessArea}', answer: '${answerArea}'`)
            score = WORLD_SCORE;
        }
        // if world correct and area correct
        else if (guessArea === answerArea) {
            console.log('correct world, correct area')
            const distance = getMarkDistance(guessMark, answerMark);
            score = getDistanceScoreCalculation(distance);
        }
        
        const distance = getMarkDistance(guessMark, answerMark);
        console.log(`guess: ${guessMark.xPercent.toFixed(1)}, ${guessMark.yPercent.toFixed(1)}`)
        console.log(`answer: ${answerMark.xPercent.toFixed(1)}, ${answerMark.yPercent.toFixed(1)}`)
        console.log(`distance from answer: ${distance.toFixed(1)}`)
    }

    return score;
}

export function getRandomImagePath(): string {
    //const worldName = "Dragonspyre";
    //const imageList = Object.values(guessImages).flat().filter(img => img.imgSrc.includes('Dragonspyre'));
    const imageList = Object.values(guessImages).flat();
    const randomGuessImage = imageList[Math.floor(Math.random() * imageList.length)]!;
    const imgSrc = randomGuessImage.imgSrc!;
    console.log(`current img: ${imgSrc}`)
    currentGuessImage = randomGuessImage;
    return imgSrc;

}

/** Places new mark or replaces existing mark */
export function placeMarker(e: PointerEvent): void {
    
    // return early if dragging map
    if (pointerDownPos) {
        const dx = e.clientX - pointerDownPos.x;
        const dy = e.clientY - pointerDownPos.y;

        if (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD) {
            return;
        }
    }

    // return early if map is not rendered yet
    const spiralContent = document.getElementById("spiral-content");
    if (!spiralContent) return;

    const markerElement = spiralContent.querySelector(".marker");

    const rect = container!.getBoundingClientRect();
    const {scale, tx, ty} = getTransform();

    // convert screen coords to content coords then to percenteges
    const contentX = (e.clientX - rect.left - tx) / scale;
    const contentY = (e.clientY - rect.top - ty) / scale;
    const xPercent = (contentX / rect.width) * 100;
    const yPercent = (contentY / rect.height) * 100;

    if (markerElement) {
        (markerElement as HTMLElement).style.left = xPercent + "%";
        (markerElement as HTMLElement).style.top = yPercent + "%";
    }
    else {
        const marker = document.createElement("img");
    
        marker.style.pointerEvents = "none";
        marker.src = MARKER_SRC;
        marker.classList.add("marker")
        marker.style.position = "absolute";
        marker.style.width = markerSize + "px";
        marker.style.height = markerSize + "px";
        // center on click, counter-scale to stay fixed size
        marker.style.transform = `translate(-50%, -50%) scale(${1 / scale})`;

        marker.style.left = xPercent + "%";
        marker.style.top = yPercent + "%";
    
        spiralContent!.appendChild(marker);

        
        // update submit button text
        submitAnswerButton!.textContent = "Submit your Guess!";
        submitAnswerButton!.style.backgroundColor = 'rgb(30, 2, 90)';
        
    }
    // update current mark
    currentMarker = {key: getLevelKey(), xPercent, yPercent};
    console.log(`x:${xPercent.toFixed(1)}\ny:${yPercent.toFixed(1)}`);
}

/** Preserves mark through level changes (spiral/world/area) */
export function saveMarker(): void {
    const spiralContent = document.getElementById("spiral-content");
    const markerElement = spiralContent?.querySelector(".marker") as HTMLElement;

    if (markerElement) {
        currentMarker = {
            key: getLevelKey(),
            xPercent: parseFloat(markerElement.style.left),
            yPercent: parseFloat(markerElement.style.top)
        };
        //console.log(currentMarker.key);
    }
}

/** Replaces existing mark when level with existing mark is loaded */
export function restoreMarker(): void {
    const spiralContent = document.getElementById("spiral-content");
    
    // return if a marker has not been placed yet
    if (!spiralContent || !currentMarker) return;

    // return if marker belongs to a different map level
    if (currentMarker.key !== getLevelKey()) return;

    const {scale} = getTransform();
    
    const marker = document.createElement("img");
    marker.style.pointerEvents = "none";
    marker.src = MARKER_SRC;
    marker.classList.add("marker")
    marker.style.position = "absolute";
    marker.style.width = markerSize + "px";
    marker.style.height = markerSize + "px";
    // center on click, counter-scale to stay fixed size
    marker.style.transform = `translate(-50%, -50%) scale(${1 / scale})`;
    marker.style.left = currentMarker.xPercent + "%";
    marker.style.top = currentMarker.yPercent + "%";
    
    spiralContent!.appendChild(marker);
}
