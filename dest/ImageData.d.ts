export declare enum Difficulty {
    FREE = 0,
    EASY = 1,
    MEDIUM = 2,
    HARD = 3,
    VERY_HARD = 4,
    GOOFY = 5,
    UNDEFINED = 999
}
export interface GuessImage {
    imgSrc: string;
    difficulty: Difficulty;
    mapSize: number;
    solutionMarker: {
        key: string;
        xPercent: number;
        yPercent: number;
    };
}
export declare function difficultyToString(difficulty: Difficulty): string;
export declare const guessImages: Record<string, GuessImage[]>;
//# sourceMappingURL=ImageData.d.ts.map