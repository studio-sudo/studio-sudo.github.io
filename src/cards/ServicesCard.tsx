import { useEffect } from 'react';
import './ServicesCard.scss';

export function ServicesCard() {

    useEffect(() => {
        let clipNumbers: [number, number][] = [
            [200, 300],
            [250, 350],
            [300, 300],
            [350, 250],
            [300, 200],
        ]
        const rotationNumbers = [0.99619469809, 0.08715574274] as const;

        const clipNumbersOrigins = clipNumbers.map(c => [...c] as [number, number]);
        const vector = document.querySelector<HTMLDivElement>('#services .fancy-vector')!;
        const setter = (clips: [number, number][]) => {
            const path = "M 200 150 Q 150 175, 200 200" + clips.map(c => ` T ${c[0]} ${c[1]}`).join('') + " T 200 150";
            vector.style.clipPath = 'path(\''+path+'\')';
        }
        
        setter(clipNumbers);
        const animator = () => {
            clipNumbers = clipNumbers.map((c, i) => {
                const origin = clipNumbersOrigins[i];
                const delta = [c[0] - origin[0], c[1] - origin[1]] as const;
                const deltaRot = [
                    delta[0] * rotationNumbers[0] - delta[1] * rotationNumbers[1],
                    delta[0] * rotationNumbers[1] + delta[1] * rotationNumbers[0]
                ] as const;
                return [deltaRot[0] + origin[0], deltaRot[1] + origin[1]] as [number, number];
            })
            setter(clipNumbers);
            requestAnimationFrame(animator);
        };
        requestAnimationFrame(animator);
    }, []);

    return (
      <div id="services" className='card'>
        <div className="fancy-vector"></div>
      </div>
    )
}