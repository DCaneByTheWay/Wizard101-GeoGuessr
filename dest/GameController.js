import { getLevelKey, getTransform } from "./ZoomController.js";
import { guessImages } from "./ImageData.js";
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
const markerSize = 30;
const imageElement = document.getElementById("guess-image");
const imageWrapper = imageElement?.parentElement;
// disable drag on spiral and children
imageElement.ondragstart = () => false;
const container = document.getElementById("Spiral");
container.addEventListener("click", placeMarker);
let pointerDownPos = null;
const DRAG_THRESHOLD = 5; // pixels of drag
container.addEventListener("pointerdown", (e) => {
    pointerDownPos = { x: e.clientX, y: e.clientY };
});
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        submitGuess();
        e.preventDefault();
    }
});
const MARKER_SRC = "./Images/Markers/(Icon)_Place_Mark.png";
const ANSWER_MARKER_SRC = "./Images/Markers/(Icon)_Quests.png";
let currentMarker = null;
const submitAnswerButton = document.getElementById("submit-guess-button");
const scoreDisplay = document.getElementById("score-display");
const scoreBreakdown = document.getElementById("score-breakdown");
let currentGuessImage = null;
// max score for a perfect guess
const MAX_SCORE = 5000;
// weights of each of the components of a guess (out of 1)
const WORLD_VALUE_WEIGHT = 0.1;
const AREA_VALUE_WEIGHT = 0.15;
// score values 
const WORLD_SCORE = MAX_SCORE * WORLD_VALUE_WEIGHT;
const AREA_SCORE = MAX_SCORE * AREA_VALUE_WEIGHT;
const MAXIMUM_DISTANCE_SCORE = MAX_SCORE - (WORLD_SCORE + AREA_SCORE);
export function setBackgroundImage(src) {
    if (imageElement) {
        imageWrapper?.classList.add("spinner-container");
        imageWrapper?.classList.remove("loaded");
        imageElement.onload = () => {
            imageWrapper?.classList.add("loaded");
        };
        imageElement.src = src;
    }
}
export function startRound(imgSrc) {
    setBackgroundImage(imgSrc);
    // TODO: add actual game logic
}
export function submitGuess() {
    // return early if no marker placed yet
    if (!currentMarker)
        return;
    console.log("submitted!");
    const answerMark = currentGuessImage?.solutionMarker;
    const score = getCalculatedScore(currentMarker, answerMark);
    console.log(`your score: ${score.toFixed(0)}/${MAX_SCORE}`);
    scoreDisplay.textContent = `You Scored ${score.toFixed(0).toString()}/${MAX_SCORE}!`;
    //scoreBreakdown!.textContent = `Correct World: `; //TODO: make breakdown
}
/** Takes two marks and returns distance */
function getMarkDistance(mark1, mark2) {
    const dx = mark1.xPercent - mark2.xPercent;
    const dy = mark1.yPercent - mark2.yPercent;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance;
}
export function getCalculatedScore(guessMark, answerMark) {
    let score = 0;
    // if guess marker is at spiral level
    if (guessMark.key === "spiral") {
        // TODO: implement logic to find if marker is on world icon
    }
    // if guess marker is at world level
    else if (guessMark.key.includes("world")) {
        // TODO: finish deciding how to calculate score at this level
        // prob either place marker 50% away from answer marker, or place marker in center of area to calculate distance
    }
    // if guess marker is at area level
    else if (guessMark.key.includes("area")) {
        const [, guessWorld, guessArea] = guessMark.key.split(":");
        const [, answerWorld, answerArea] = answerMark.key.split(":");
        // if world incorrect
        if (guessWorld !== answerWorld) {
            console.log('incorrect world');
            console.log(`guess: '${guessWorld}', answer: '${answerWorld}'`);
            score = 0;
        }
        // if world correct and area incorrect
        else if (guessArea !== answerArea) {
            console.log('correct world, incorrect area');
            console.log(`guess: '${guessArea}', answer: '${answerArea}'`);
            score = WORLD_SCORE;
        }
        // if world correct and area correct
        else if (guessArea === answerArea) {
            console.log('correct world, correct area');
            const distance = getMarkDistance(guessMark, answerMark);
            score = WORLD_SCORE + AREA_SCORE + MAXIMUM_DISTANCE_SCORE * Math.E ** (-6.7 * distance / currentGuessImage?.mapSize);
        }
        else {
            console.log('how did we get here');
            console.log(`guess: ${guessMark.key}, answer: ${guessMark.key}`);
        }
        const distance = getMarkDistance(guessMark, answerMark);
        console.log(`guess: ${guessMark.xPercent.toFixed(1)}, ${guessMark.yPercent.toFixed(1)}`);
        console.log(`answer: ${answerMark.xPercent.toFixed(1)}, ${answerMark.yPercent.toFixed(1)}`);
        console.log(`distance from answer: ${distance.toFixed(1)}`);
        console.log(`score: ${score}`);
    }
    else {
        console.log('how did we get here');
        console.log(`key: ${guessMark.key}`);
    }
    /*
    Scoring System:
    out of 100%
    Correct World:    <= 10%
    Correct Area:     <= 15%
    Correct Distance: >= 75%


    Guess at spiral level:
    (World only guess)
    MAX score: 10% score

    Guess at world level:
    (World and Area only guess)
    Deciding between 2 options:
    1)
    Marker is put at pos 50%, 50% at area level
    MAX score: 10% + 15% + (50/50 area guess)% = ?% score
    2)
    Marker is calculated at 50% away from answer marker
    MAX score: 10% + 15% + (50/50 area guess)% = ?% score

    Guess at area level:
    (World, Area, and distance guess)
    MAX score: 10% + 15% + 75% = 100% score









    Casey Wizard101 GeoGuessr Score calculation derived from Actual Geoguessr calculation into python:

    # max score of 100% (can be scaled up to any value)

    import math
    isAreaCorrect = True
    isWorldCorrect = True if isAreaCorrect else False

    worldScore = 10 if isWorldCorrect else 0
    areaScore = 15 if isAreaCorrect else 0
    distance = 10

    maxDistanceScore = 75
    mapSize = 100 # MAPSIZE NEEDS TO BE ADJUSTED PER EACH MAP!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    score = worldScore + areaScore + maxDistanceScore*math.e**(-6.7 * distance/mapSize)
    print(score)

    */
    return score;
}
export function getRandomImagePath() {
    //const worldName = "Dragonspyre";
    //const imageList = Object.values(guessImages).flat().filter(img => img.imgSrc.includes(worldName));
    const imageList = Object.values(guessImages).flat();
    const randomGuessImage = imageList[Math.floor(Math.random() * imageList.length)];
    const imgSrc = randomGuessImage.imgSrc;
    console.log(`current img: ${imgSrc}`);
    currentGuessImage = randomGuessImage;
    return imgSrc;
}
export function placeMarker(e) {
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
    if (!spiralContent)
        return;
    const markerElement = spiralContent.querySelector(".marker");
    const rect = container.getBoundingClientRect();
    const { scale, tx, ty } = getTransform();
    // convert screen coords to content coords then to percenteges
    const contentX = (e.clientX - rect.left - tx) / scale;
    const contentY = (e.clientY - rect.top - ty) / scale;
    const xPercent = (contentX / rect.width) * 100;
    const yPercent = (contentY / rect.height) * 100;
    if (markerElement) {
        markerElement.style.left = xPercent + "%";
        markerElement.style.top = yPercent + "%";
    }
    else {
        const marker = document.createElement("img");
        marker.style.pointerEvents = "none";
        marker.src = MARKER_SRC;
        marker.classList.add("marker");
        marker.style.position = "absolute";
        marker.style.width = markerSize + "px";
        marker.style.height = markerSize + "px";
        // center on click, counter-scale to stay fixed size
        marker.style.transform = `translate(-50%, -50%) scale(${1 / scale})`;
        marker.style.left = xPercent + "%";
        marker.style.top = yPercent + "%";
        spiralContent.appendChild(marker);
        // update submit button text
        submitAnswerButton.textContent = "Submit your Guess!";
        submitAnswerButton.style.backgroundColor = 'rgb(30, 2, 90)';
    }
    // update current mark
    currentMarker = { key: getLevelKey(), xPercent, yPercent };
    console.log(`x:${xPercent.toFixed(1)}\ny:${yPercent.toFixed(1)}`);
}
export function saveMarker() {
    const spiralContent = document.getElementById("spiral-content");
    const markerElement = spiralContent?.querySelector(".marker");
    if (markerElement) {
        currentMarker = {
            key: getLevelKey(),
            xPercent: parseFloat(markerElement.style.left),
            yPercent: parseFloat(markerElement.style.top)
        };
        console.log(currentMarker.key);
    }
}
export function restoreMarker() {
    const spiralContent = document.getElementById("spiral-content");
    // return if a marker has not been placed yet
    if (!spiralContent || !currentMarker)
        return;
    // return if marker belongs to a different map level
    if (currentMarker.key !== getLevelKey())
        return;
    const { scale } = getTransform();
    const marker = document.createElement("img");
    marker.style.pointerEvents = "none";
    marker.src = MARKER_SRC;
    marker.classList.add("marker");
    marker.style.position = "absolute";
    marker.style.width = markerSize + "px";
    marker.style.height = markerSize + "px";
    // center on click, counter-scale to stay fixed size
    marker.style.transform = `translate(-50%, -50%) scale(${1 / scale})`;
    marker.style.left = currentMarker.xPercent + "%";
    marker.style.top = currentMarker.yPercent + "%";
    spiralContent.appendChild(marker);
}
//# sourceMappingURL=GameController.js.map