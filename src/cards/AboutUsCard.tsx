import './AboutUsCard.scss';
import aboutUsLogo from '../assets/about-us.svg';


export function AboutUsCard() {
    return (
        <div id="about" className="row g-0 stripe about-us">
            <div className='col-lg-6 col-12 p-3'>
                <img className='about-us-image' style={{ transform: 'translateX(1000)' }} src={aboutUsLogo} />

            </div>
            <div className='col-lg-5 col-12 p-3'>
                <h2>About Us</h2>
                <div className="lead-text">Let Success Motivate You.</div>
                <div className='content-text'>Making a decision to do something – this is the first step. We all know that nothing moves until someone makes a decision. The first action is always in making the decision to proceed. This is a fundamental step, which most people overlook.
                    <div className='row g-0'>
                        <div className='col-lg-6 col-12'>
                            <ul className='about-us-pointers'>
                                <li>For those of you who are serious about having more.</li>
                                <li>This is the beginning of creating the life that you want to live.</li>
                            </ul>
                        </div>
                        <div className='col-lg-6 col-12'>
                            <ul className='about-us-pointers'>
                                <li>Success is something of which we all want more.</li>
                                <li>The price is something not necessarily defined as financial.</li>
                            </ul>
                        </div>
                    </div>






                </div>
            </div>


        </div>
    )
}