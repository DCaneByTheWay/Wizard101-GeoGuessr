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
export interface Arc {
    name: ArcID;
    worlds: string[];
}
export declare enum ArcID {
    ARC_1 = "Arc 1",
    ARC_2 = "Arc 2",
    ARC_3 = "Arc 3",
    SIDE_ARC = "Side Arc"
}
export declare const arcs: Arc[];
export declare const worlds: World[];
//# sourceMappingURL=WorldData.d.ts.map