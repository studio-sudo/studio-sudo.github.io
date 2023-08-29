import { IsoLine, IsoPoint, isoLines } from 'marchingsquares';
import { useEffect } from 'react';
import { isReducedMotion } from './reduced-motion';

const GRID_SIZE = 30;
let cell_size = Math.ceil(document.body.clientWidth/(GRID_SIZE - 1));
function pointToCommand(p: IsoPoint, index: number): string {
    const x = (p[0] * cell_size);
    const y = (p[1] * cell_size);
    if (index === 0) {
        return `M ${x} ${y}`;
    } else {
        return ` ${x} ${y}`;
    }
}

function smooth(line: IsoLine): IsoLine {
    line = dual(refine(line));
    return line;
}

function refine(line: IsoLine): IsoLine {
    const result: IsoLine = [];

    line.forEach((p1, i) => {
        const p2 = i === line.length - 1 ? line[0] : line[i + 1];
        result.push(p1);
        result.push([(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2] as IsoPoint);
    });
    return result;
}

function dual(line: IsoLine): IsoLine {
    const result: IsoLine = [];

    line.forEach((p1, i) => {
        const p2 = i === line.length - 1 ? line[0] : line[i + 1];
        result.push([(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2] as IsoPoint);
    });
    return result;
}


export function LavaLamp() {
        
    useEffect(() => {
        const lavaLampRule = Array.from(document.styleSheets)
            .flatMap(s => s.cssRules)
            .flatMap(l => Array.from(l))
            .filter((rule): rule is CSSStyleRule => rule instanceof CSSStyleRule)
            .find(rule => rule.selectorText === "#lava-lamp");
        if (!lavaLampRule) return;

        if (isReducedMotion) {
            const reducedPath = [];
            for (let i = 0; i < 1000; i++) {
                reducedPath.push(`M 12 ${i*200} H 24 V ${i*200+100} H 12 Z`);
            }
            lavaLampRule.style.clipPath = `path('${reducedPath.join(' ')}')`;
            return;
        }

        const line = [...Array(GRID_SIZE).keys()].map(() => 0);

        const data: number[][] = [];

        for (let i = 0; i <= Math.ceil(document.body.clientHeight * GRID_SIZE / document.body.clientWidth) + 2; i++) {
            data.push([...line]);
        }

        const blobs = [
            { x:  2, y: 0, r: 20, dy: 0 },
            { x: 12, y: 0, r: 20, dy: 0 },
            { x: 22, y: 0, r: 20, dy: 0 },
            { x: 32, y: 0, r: 20, dy: 0 },
            //{ x: 42, y: 0, r: 20, dy: 0 }
        ];

        for (let i = 0; i < GRID_SIZE/2; i++) {
            blobs.push({
                x: Math.trunc(Math.random() * data[0].length),
                y: Math.trunc(Math.random() * data.length),
                r: GRID_SIZE/15 + Math.trunc(Math.random() * GRID_SIZE/3),
                dy: 0.5 + Math.random() * 1.5,
            })
        }


        const setter = (data: number[][]) => {
            let lines = isoLines(data, 0);
            lines = lines.map(line => smooth(line));

            cell_size = Math.ceil(document.body.clientWidth/(GRID_SIZE - 1));
            const path = lines.flatMap(line => line.map(pointToCommand));
            lavaLampRule.style.clipPath = `path('`.concat(...path, `')`);
        }
        
        setter(data);

        let lastTimestamp: DOMHighResTimeStamp = 0;
        let sec = false;
        const animator = (timestamp: DOMHighResTimeStamp) => {
            const delta = (timestamp - lastTimestamp) / 1000;
            lastTimestamp = timestamp;
            sec = !sec;
            if (delta <= 0 || sec) {
                requestAnimationFrame(animator);
                return;
            }
            blobs.forEach(blob => {
                blob.y += blob.dy * delta;
                if (blob.y - blob.r > data.length) {
                    blob.y = -blob.r;
                }
            });
            const lfe = (y: number, x: number) => {
                let result = 1;
                blobs.forEach(blob => {
                    result -= blob.r / ((blob.x-x) * (blob.x-x) + (blob.y-y) * (blob.y-y));
                });
                data[y][x] = result;
            };
            const dfe = (line: number[], y: number) => line.forEach((_, x) => lfe(y, x));

            data.forEach(dfe);

            setter(data);
            requestAnimationFrame(animator);
        };
        requestAnimationFrame(animator);
    });

    return <div id="lava-lamp"></div>
}