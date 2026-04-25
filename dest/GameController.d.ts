export declare const GOOFY_MARKER_SRC = "./Images/Markers/(Icon)_Shadow_Trickster.png";
export declare const nextRoundButton: HTMLElement | null;
export declare function setBackgroundImage(src: string): void;
export declare function startRound(): void;
/** Submits location of current marker */
export declare function submitGuess(): void;
/** Takes guessMark and answerMark, and returns score for the round */
export declare function getCalculatedScore(guessMark: {
    key: string;
    xPercent: number;
    yPercent: number;
}, answerMark: {
    key: string;
    xPercent: number;
    yPercent: number;
}): number;
export declare function getRandomImagePath(): string;
export declare function setLastNonGoofyMarkerSrc(markSrc: string): void;
/** Places new mark or replaces existing mark */
export declare function placeMarker(e: PointerEvent): void;
/** Preserves mark through level changes (spiral/world/area) */
export declare function saveMarker(): void;
/** Replaces existing mark when level with existing mark is loaded */
export declare function restoreMarker(): void;
/** Rerenders marks on current level */
export declare function rerenderMarkers(): void;
//# sourceMappingURL=GameController.d.ts.map