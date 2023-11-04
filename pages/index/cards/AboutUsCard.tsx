import './AboutUsCard.scss';
import aboutUsLogo from '../../../assets/about-us.svg';

export function AboutUsCard() {
    return (
        <div id="about" className="row g-0 stripe about-us">
            <div className='col-lg-6 col-12 p-3'>
                <img className='about-us-image' width="568" height="426" src={aboutUsLogo} alt="Mężczyzna i kobieta tworzący oprogramowanie" loading="lazy" />
            </div>
            <div className='col-lg-5 col-12 p-3'>
                <h2>O nas</h2>
                <div className="lead-text">Zmieniamy Twój biznes w kod.</div>
                <div className='content-text'>
                    Jesteśmy gotowi podjąć się każdego wyzwania, a nasze działania opieramy o szereg wartości którymi się kierujemy:
                    <div className='row g-0'>
                        <div className='col-lg-6 col-12'>
                            <ul className='about-us-pointers'>
                                <li>
                                    Pasja - Jesteśmy prawdziwymi pasjonatami tworzenia oprogramowania, co daje nam motywację do ciągłych ulepszeń i zwiększania efektywności.
                                    Zawsze się rozwijamy!
                                </li>
                            </ul>
                        </div>
                        <div className='col-lg-6 col-12'>
                            <ul className='about-us-pointers'>
                                <li>
                                    Rzetelność - W każdy projekt wkładamy cząstkę siebie, i traktujemy go z najwyższą dbałością o szczegóły.
                                    Każdy projekt wykonany spod naszej ręki jest na błysk!
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}