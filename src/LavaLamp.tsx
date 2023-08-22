import { IsoLine, IsoPoint, isoLines } from 'marchingsquares';
import { useEffect } from 'react';

function pointToCommand(p: IsoPoint, index: number): string {
    const size = document.body.clientWidth/GRID_SIZE + 1;
    if (index === 0) {
        return `M ${p[0]*size} ${p[1]*size}`;
    } else {
        return `L ${p[0]*size} ${p[1]*size}`;
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

const GRID_SIZE = 40;

export function LavaLamp() {
        
    useEffect(() => {

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
            { x: 42, y: 0, r: 20, dy: 0 }
        ];

        for (let i = 0; i < 20; i++) {
            blobs.push({
                x: Math.trunc(Math.random() * data[0].length),
                y: Math.trunc(Math.random() * data.length),
                r: 3 + Math.trunc(Math.random() * 17),
                dy: 0.5 + Math.random() * 1.5,
            })
        }

        const vector = document.querySelector<HTMLDivElement>('#lava-lamp')!;

        const setter = (data: number[][]) => {
            let lines = isoLines(data, 0);
            lines = lines.map(line => smooth(line));

            const path = lines
                .map(line => line.map(pointToCommand).join(' '))
                .join(' ');
            vector.style.clipPath = `path('${path}')`;
        }
        
        setter(data);

        let lastTimestamp: DOMHighResTimeStamp = 0;
        const animator = (timestamp: DOMHighResTimeStamp) => {
            const delta = (timestamp - lastTimestamp) / 1000;
            lastTimestamp = timestamp;
            if (delta <= 0) return;

            blobs.forEach(blob => {
                blob.y += blob.dy * delta;
                if (blob.y - blob.r > data.length) {
                    blob.y = -blob.r;
                }
            });

            data.forEach((line, y) => line.forEach((_, x) => {
                let result = 1;
                blobs.forEach(blob => {
                    result -= blob.r / ((blob.x-x) * (blob.x-x) + (blob.y-y) * (blob.y-y));
                });
                data[y][x] = result;
            }));

            setter(data);
            requestAnimationFrame(animator);
        };
        requestAnimationFrame(animator);
    });

    return <div id="lava-lamp"></div>
}