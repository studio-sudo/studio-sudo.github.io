declare module 'marchingsquares' {
    type IsoOptions = {
        successCallback?: (path: IsoLine, threshold: number) => void;
        verbose?: boolean;
        polygons?: boolean;
        linearRing?: boolean;
        noQuadTree?: boolean;
        noFrame?: boolean;
    };

    type IsoPoint = [number, number];

    type IsoLine = IsoPoint[];

    export function isoLines(data: unknown[][], threshold: number, options?: IsoOptions): IsoLine[];
    export function isoLines(data: unknown[][], threshold: number[], options?: IsoOptions): IsoLine[][];
}