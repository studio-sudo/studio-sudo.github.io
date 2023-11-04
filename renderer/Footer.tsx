import './Footer.scss';
import companyLogo from '../assets/logo-light-bg.png';
import { Link } from './Link';


export function Footer() {
    return <footer>
        <div className='row g-0 p-5'>
            <div className="col-12 col-md-4 footerModule">
                <Link className='logoFooter' href='/'>
                    <img className='logoFooter' width="150" height="45" alt="Logo firmy" src={companyLogo} />
                </Link>
                <p>
                    Specjalizujemy się w tworzeniu rozwiązań informatycznych specjalnie dostosowanych do Twojego biznesu.
                    Niech nasze usługi wprowadzą Twój biznes w erę cyfryzacji!
                </p>
            </div>
            <div className="col-12 col-md-4 footerModule">
                <div className="footerHeading">
                    Nasza oferta
                </div>
                <div>
                    <ul>
                        <li>
                            Strony Internetowe
                        </li>
                        <li>
                            Aplikacje Webowe
                        </li>
                        <li>
                            Sztuczna Inteligencja (AI)
                        </li>
                        <li>
                            Konsulting Programistyczny
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-12 col-md-4 footerModule">
                <div className="footerHeading">
                    Kontakt
                </div>
                <p className='mb-3'>
                    Sudo Studio<br />
                    Michał Isalski IT
                </p>
                NIP 6443 573 778<br />
                isalski.michal[at]gmail.com<br />
            </div>
        </div>
    </footer>;
}