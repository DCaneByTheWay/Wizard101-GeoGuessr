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
export declare const worlds: World[];
//# sourceMappingURL=WorldData.d.ts.map