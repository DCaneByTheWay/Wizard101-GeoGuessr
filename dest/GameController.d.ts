export declare function setBackgroundImage(src: string): void;
export declare function startRound(imgSrc: string): void;
export declare function submitGuess(): void;
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
export declare function placeMarker(e: PointerEvent): void;
export declare function saveMarker(): void;
export declare function restoreMarker(): void;
//# sourceMappingURL=GameController.d.ts.map