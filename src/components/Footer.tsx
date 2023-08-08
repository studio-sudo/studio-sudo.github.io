import { useEffect } from 'react';
import './Footer.scss';

export function Footer() {
    useEffect(() => {
        let t = 0;
        let dir = 1;

        const vector = document.querySelector<HTMLDivElement>('footer .fancy-vector')!;

        const setter = (t: number) => {
            const path = `M 0 200 C 0 0, 0 100, ${(t * 1083 + 200).toFixed(0)} 0 C 1483 100, 1483 0, 1483 200 V 10000 H 0 Z`;
            vector.style.clipPath = 'path(\''+path+'\')';
        }
        
        setter(t);
        const animator = () => {
            t += dir / 360;
            if (t > 1 || t < 0) {
                dir *= -1;
            }
            setter(t);
            requestAnimationFrame(animator);
        };
        requestAnimationFrame(animator);
    })

    return <footer>
        <div className='fancy-vector'></div>
    </footer>;
}