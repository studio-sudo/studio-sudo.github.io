import { IsoLine, IsoPoint, isoLines } from 'marchingsquares';
import { useEffect } from 'react';

function pointToCommand(p: IsoPoint, index: number): string {
    const size = document.body.clientWidth/GRID_SIZE;
    const coords = `${p[0]*size} ${p[1]*size}` as const;
    if (index === 0) {
        return `M ${coords}`;
    } else {
        return `L ${coords}`;
    }
}

function smooth(line: IsoLine): IsoLine {
    line = dual(refine(line));
    return line;
}

function refine(line: IsoLine): IsoLine {
    return line.flatMap((p1, i, points) => {
        const p2 = i === points.length - 1 ? points[0] : points[i + 1];
        return [p1, [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2] as IsoPoint] as const;
    });
}

function dual(line: IsoLine): IsoLine {
    return refine(line).filter((_, i) => (i%2) === 1);
}

const GRID_SIZE = 40;

export function LavaLamp() {
        
    useEffect(() => {

        const line = [...Array(GRID_SIZE).keys()].map(() => 0);

        let data: number[][] = [];

        for (let i = 0; i <= document.body.clientHeight * GRID_SIZE / document.body.clientWidth; i++) {
            data.push([...line]);
        }

        const blobs = [
            { x:  2, y: 0, r: 20, dy: 0 },
            { x: 12, y: 0, r: 20, dy: 0 },
            { x: 22, y: 0, r: 20, dy: 0 },
            { x: 32, y: 0, r: 20, dy: 0 },
            { x: 42, y: 0, r: 20, dy: 0 },

            { x: 30, y: 12, r: 20, dy: 2 },
            { x: 4, y: 2, r: 2, dy: 1 },
            { x: 7, y: 7, r: 3, dy: 1.2 },
            
            { x: 7, y: 22, r: 13, dy: 2 },
            { x: 4, y: 12, r: 2, dy: 1 },
            { x: 30, y: 17, r: 3, dy: 1.2 },

            { x: 30, y: 32, r: 20, dy: 2 },
            { x: 4, y: 22, r: 2, dy: 1 },
            { x: 7, y: 27, r: 3, dy: 1.2 },

            { x: 7, y: 42, r: 10, dy: 2 },
            { x: 4, y: 32, r: 2, dy: 1 },
            { x: 30, y: 37, r: 3, dy: 1.2 }
        ];

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
        const animator = () => {
            data = data.map(line => line.map(() => 1));
            
            blobs.forEach(blob => {
                blob.y += blob.dy / 60;
                if (blob.y + blob.r * 2 > data.length) {
                    blob.y = -blob.r;
                }
                data = data.map((line, y) => line.map((a, x) => a - blob.r / ((blob.x-x) * (blob.x-x) + (blob.y-y) * (blob.y-y))));
            })

            setter(data);
            requestAnimationFrame(animator);
        };
        requestAnimationFrame(animator);
    });

    return <div id="lava-lamp"></div>
}