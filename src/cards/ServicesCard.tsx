import { useEffect } from 'react';
import './ServicesCard.scss';

export function ServicesCard() {

    useEffect(() => {
        let clipNumbers: [number, number][] = [
            [  0*3,  50],
            [-50*3,  75*3],
            [  0*3, 100*3],
            [  0*3, 200*3],
            [ 30*3, 250*3],
            [100*3, 200*3],
            [100*3, 150*3],
            [130*3,  75*3],
        ];
        const rotationNumbers = [0.99999048072, 0.00436330928] as const;

        const clipNumbersOrigins = clipNumbers.map(c => [c[0] - 10, c[1] - 10] as [number, number]);
        const vector = document.querySelector<HTMLDivElement>('#services .fancy-vector')!;
        const setter = (clips: [number, number][]) => {
            const path = `M ${clipNumbers[0][0]} ${clipNumbers[0][1]} Q ${clipNumbers[1][0]} ${clipNumbers[1][1]}, ${clipNumbers[2][0]} ${clipNumbers[2][1]}` + clips.slice(3).map(c => ` T ${c[0]} ${c[1]}`).join('') + ` T ${clipNumbers[0][0]} ${clipNumbers[0][1]}`;
            vector.style.clipPath = 'path(\''+path+'\')';
        }
        
        setter(clipNumbers);
        const animator = () => {
            clipNumbers = clipNumbers.map((c, i) => {
                const origin = clipNumbersOrigins[i];
                let delta = [c[0] - origin[0], c[1] - origin[1]] as const;
                for(let j=0;j<(i%3)+2;j++) {
                    delta = [
                        delta[0] * rotationNumbers[0] - delta[1] * rotationNumbers[1],
                        delta[0] * rotationNumbers[1] + delta[1] * rotationNumbers[0]
                    ];
                }
                return [delta[0] + origin[0], delta[1] + origin[1]] as [number, number];
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