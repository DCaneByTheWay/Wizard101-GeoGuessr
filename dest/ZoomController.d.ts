import { World } from "./WorldData.js";
export declare enum ZoomLevel {
    SPIRAL = 0,
    WORLD = 1,
    AREA = 2
}
export declare function init(container: HTMLElement, worlds: World[]): void;
export declare function getCurrentLevel(): ZoomLevel;
//# sourceMappingURL=ZoomController.d.ts.map