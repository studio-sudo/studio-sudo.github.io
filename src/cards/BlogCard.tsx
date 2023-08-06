import './BlogCard.scss';
import aboutUsLogo from '../assets/about-us.svg';
import debuggingLogo from '../assets/debugging-software-conceptv.svg';


export function BlogCard() {

    return (
        <div id="services" className="stripe blog">
            <h2 className='centered'>Our Latest Blog</h2>
            <div className="lead-text centered">Latest News And Inspirational Stories</div>
            <div className='content-text centered'>Positive pleasure-oriented goals are much more powerful motivators than negative fear-based ones. Although each is successful separately</div>

            <div className='blog-index row g-0 px-5'>
                <div className='col-lg-4 col-12'>
                    <div className='blog-article-card'>
                        <div className='image'>
                            <img className='about-us-image' style={{ transform: 'translateX(1000)' }} src={aboutUsLogo} />
                        </div>
                        <div className='category'>Startups</div>
                        <div className='date'>Aug 05, 2021</div>
                        <div className='title'>From A Small Startup To A Leading Global Agency In 12 Years</div>
                    </div>
                </div>
                <div className='col-lg-4 col-12'>
                    <div className='blog-article-card'>card</div>

                </div>
                <div className='col-lg-4 col-12'>
                    <div className='blog-article-card'>

                        <div className='image'>
                            <img className='about-us-image' style={{ transform: 'translateX(1000)' }} src={debuggingLogo} />
                        </div>
                        <div className='category'>Startups</div>
                        <div className='date'>Jan 05, 2021</div>
                        <div className='title'>How Google's BERT Algorithm Affects Your Website Traffic</div>
                    </div>
                </div>
            </div>
        </div>
    )
}