import { World } from "./WorldData.js";
export declare enum ZoomLevel {
    SPIRAL = 0,
    WORLD = 1,
    AREA = 2
}
export declare function init(container: HTMLElement, worlds: World[]): void;
export declare function getCurrentLevel(): ZoomLevel;
export declare function getTransform(): {
    scale: number;
    tx: number;
    ty: number;
};
//# sourceMappingURL=ZoomController.d.ts.map