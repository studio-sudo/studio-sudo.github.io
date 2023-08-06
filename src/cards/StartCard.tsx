import { useEffect } from 'react';
import titleLogo from '../assets/online-shopping-concept.svg';
import './StartCard.scss';

export function StartCard() {
    useEffect(() => {
        gsap.timeline()
            .set("#title img", { x: 1000, opacity: 0})
            .set("#title .intro h2", { opacity: 0, y: 1000})
            .set("#title .intro div", { opacity: 0, y: 1000})
        
            .to("#title img", { opacity: 1, duration: 1, ease: 'power4.in' }, 0)
            .to("#title img", { x: 0, duration: 1 }, 0)
        
            .to("#title .intro h2", { opacity: 1, duration: 1, ease: 'power4.in'}, 0.5)
            .to("#title .intro h2", { y: 0, duration: 1}, 0.5)
        
            .to("#title .intro div", { opacity: 1, duration: 1, ease: 'power4.in'}, 1)
            .to("#title .intro div", { y: 0, duration: 1}, 1)
            .play();
    
        gsap.timeline({ repeat: -1, repeatDelay: 2, delay: 2 })
            .to(".icon.icon-1", { scale: 1.1, duration: 0.5 })
            .to(".icon.icon-1", { scale: 1, duration: 0.5 })
            .play();

        gsap.timeline({ repeat: -1, repeatDelay: 2, delay: 3 })
            .to(".icon.icon-2", { x: "-=8", y: "-=8", ease: 'sine.inout', duration: 1 })
            .to(".icon.icon-2", { x: "+=16", y: "+=16", ease: 'sine.inout', duration: 2 })
            .to(".icon.icon-2", { x: "-=8", y: "-=8", ease: 'sine.inout', duration: 1 })
            .play();

        gsap.timeline({ repeat: -1, repeatDelay: 2, delay: 2.5})
            .to(".icon.icon-3", { rotation: "+=30", duration: 1 })
            .to(".icon.icon-3", { rotation: "-=30", ease: 'elastic', duration: 1})
            .play();
      }, []);

    return (
        <div id="title" className="card">
            <div className="fancy-vector"></div>
            <div className='intro'>
                <h2>Witaj w Sudo</h2>
                <div>Twoim partnerze w cyfrowej przyszłości</div>
            </div>
            <img style={{transform: 'translateX(1000)'}} src={titleLogo}/>
            <div className="icon icon-1"></div>
            <div className="icon icon-2"></div>
            <div className="icon icon-3">x</div>
        </div>
    );
}