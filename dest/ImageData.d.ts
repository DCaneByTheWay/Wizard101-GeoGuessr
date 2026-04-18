export declare enum Difficulty {
    FREE = 0,
    EASY = 1,
    MEDIUM = 2,
    HARD = 3,
    GOOFY = 4
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
export declare const guessImages: Record<string, GuessImage[]>;
//# sourceMappingURL=ImageData.d.ts.map