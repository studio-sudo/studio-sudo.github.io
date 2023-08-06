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
        <div className="info">
            <h2>Nasze usługi</h2>
            <div className="lead-text mb-3">Czego dokładnie potrzebujesz?</div>
            <div className="sections">
                <div>
                    <div className="icon icon-1"></div>
                    <h3>Aplikacje Desktopowe</h3>
                    <div className="desc">Niech Twoje oprogramowanie będzie nie tylko wydajne, ale także intuicyjne. Dzięki naszym aplikacjom desktopowym osiągniesz nowy poziom efektywności i kontroli nad działaniem Twojego biznesu.</div>
                </div>
                <div>
                    <div className="icon icon-2"></div>
                    <h3>Strony Internetowe</h3>
                    <div className="desc">Twoja witryna to wizytówka Twojej firmy w świecie online. Nasze strony internetowe nie tylko zachwycą estetyką, ale są także zoptymalizowane pod kątem wydajności i pozycjonowania, przyciągając nowych klientów.</div>
                </div>
                <div>
                    <div className="icon icon-3"></div>
                    <h3>Aplikacje Webowe</h3>
                    <div className="desc">Tworzymy dynamiczne aplikacje internetowe, które nie tylko zachwycą użytkowników swoim wyglądem, ale także zapewnią im płynne i zaawansowane doświadczenia online.</div>
                </div>
                <div>
                    <div className="icon icon-4"></div>
                    <h3>Sztuczna Inteligencja (AI)</h3>
                    <div className="desc">Wprowadź swoją firmę w erę nowoczesności dzięki naszym zaawansowanym rozwiązaniom opartym na Sztucznej Inteligencji. Optymalizuj procesy, analizuj dane oraz prognozuj trendy z niespotykaną wcześniej precyzją.</div>
                </div>
            </div>
        </div>
      </div>
    )
}