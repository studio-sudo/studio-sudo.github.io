import { useEffect } from 'react';
import titleLogo from '../assets/debugging-software-conceptv.svg';
import './StartCard.scss';
import { Button } from '../components/Button';
import { isReducedMotion } from '../reduced-motion';

export function StartCard() {
    useEffect(() => {
        if (isReducedMotion) return;
        gsap.timeline()
            .set("#title .main-logo", { x: 1000, opacity: 0 })
            .set("#title .intro h2", { opacity: 0, y: 1000 })
            .set("#title .intro div", { opacity: 0, y: 1000 })
            .set("#title .intro button", { opacity: 0, y: 1000 })

            .to("#title .main-logo", { opacity: 1, duration: 1, ease: 'power4.in' }, 0)
            .to("#title .main-logo", { x: 0, duration: 1 }, 0)

            .to("#title .intro h2", { opacity: 1, duration: 1, ease: 'power4.in' }, 0.5)
            .to("#title .intro h2", { y: 0, duration: 1 }, 0.5)

            .to("#title .intro div", { opacity: 1, duration: 1, ease: 'power4.in' }, 1)
            .to("#title .intro div", { y: 0, duration: 1 }, 1)

            .to("#title .intro button", { opacity: 1, duration: 1, ease: 'power4.in' }, 1.5)
            .to("#title .intro button", { y: 0, duration: 1 }, 1.5)
            .play();

        gsap.timeline({ repeat: -1, repeatDelay: 2, delay: 2 })
            .to("#title .icon.icon-1", { scale: 1.1, duration: 0.5 })
            .to("#title .icon.icon-1", { scale: 1, duration: 0.5 })
            .play();

        gsap.timeline({ repeat: -1, repeatDelay: 2, delay: 3 })
            .to("#title .icon.icon-2", { x: "+=8", y: "-=8", ease: 'sine.inout', duration: 1 })
            .to("#title .icon.icon-2", { x: "-=16", y: "+=16", ease: 'sine.inout', duration: 2 })
            .to("#title .icon.icon-2", { x: "+=8", y: "-=8", ease: 'sine.inout', duration: 1 })
            .play();

        gsap.timeline({ repeat: -1, repeatDelay: 2, delay: 2.5 })
            .to("#title .icon.icon-3", { rotation: "+=30", duration: 1 })
            .to("#title .icon.icon-3", { rotation: "-=30", ease: 'elastic', duration: 1 })
            .play();

        gsap.timeline({ repeat: -1, repeatDelay: 2, delay: 3.5 })
            .set("#title .icon.icon-4", { filter: 'brightness(1)' })
            .to("#title .icon.icon-4", { filter: 'brightness(0.75)', duration: 2 })
            .to("#title .icon.icon-4", { filter: 'brightness(1)', duration: 2 })
            .play();
    }, []);

    return (
        <div id="title" className="card start-card">
            <div className='intro'>
                <h2>Sudo Studio</h2>
                <div>Innowacyjne technologie w służbie Twojego biznesu</div>
                <Button label="Powiedz nam, czego potrzebujesz" />
            </div>
            <img className="main-logo" style={{ transform: 'translateX(1000)' }} src={titleLogo} />
            <div className="icon icon-1">
                <img src="/icons/chart.svg" />
            </div>
            <div className="icon icon-2">
                <img src="/icons/rocket.svg" />
            </div>
            <div className="icon icon-3">
                <img src="/icons/tools.svg" />
            </div>
            <div className="icon icon-4"></div>
            <div className="icon icon-5"></div>
        </div>
    );
}