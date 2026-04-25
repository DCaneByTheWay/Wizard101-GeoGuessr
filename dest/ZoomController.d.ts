import { World } from "./WorldData.js";
export declare enum ZoomLevel {
    SPIRAL = 0,
    WORLD = 1,
    AREA = 2
}
export declare function init(container: HTMLElement, worlds: World[]): void;
export declare function saveAndScaleTransform(sizeRatio: number): void;
export declare function restoreTransform(): void;
export declare function getCurrentLevel(): ZoomLevel;
export declare function getLevelKey(): string;
export declare function getTransform(): {
    scale: number;
    tx: number;
    ty: number;
};
/** Resets map to spiral level */
export declare function resetToSpiral(container: HTMLElement, worlds: World[]): void;
export declare function setZoomSpeed(newZoomSpeed: number): void;
//# sourceMappingURL=ZoomController.d.ts.map