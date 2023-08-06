import './AboutUsCard.scss';
import aboutUsLogo from '../assets/about-us.svg';


export function AboutUsCard() {



    return (
        <div id="services" className="row g-0 stripe">
            <div className='col-lg-6 col-12 p-3'>
                <img className='about-us-image' style={{ transform: 'translateX(1000)' }} src={aboutUsLogo} />

            </div>
            <div className='col-lg-5 col-12 p-3'>
                <h2>About Us</h2>
                <div className="lead-text">Let Success Motivate You.</div>
                <div className='content-text'>Making a decision to do something – this is the first step. We all know that nothing moves until someone makes a decision. The first action is always in making the decision to proceed. This is a fundamental step, which most people overlook.
                </div>
            </div>


        </div>
    )
}