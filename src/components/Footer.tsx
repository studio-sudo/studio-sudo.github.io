import { NavLink } from 'react-router-dom';
import './Footer.scss';
import companyLogo from '../assets/logo-light-bg.png';


export function Footer() {
    return <footer>
        <div className='row g-0 p-5'>
            <div className="col-12 col-md-4 footerModule">
                <NavLink className='logoFooter' to='/'>
                    <img className='logoFooter' width="150" height="45" alt="Logo firmy" src={companyLogo} />
                </NavLink>
                <p>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec odio consectetur felis ullamcorper blandit.
                    Cras bibendum sapien ac eros rhoncus lobortis. In a tincidunt ipsum, id tincidunt velit.
                </p>
            </div>
            <div className="col-12 col-md-4 footerModule">
                <div className="footerHeading">
                    Nasza oferta
                </div>
                <div>
                    <ul>
                        <li>
                            Lorem ipsum dolor sit amet
                        </li>
                        <li>
                            Consectetur adipiscing elit
                        </li>
                        <li>
                            Maecenas nec odio consectetur
                        </li>
                        <li>
                            Felis ullamcorper blandit
                        </li>
                        <li>
                            Cras bibendum sapien
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
                    Michał Isalski
                </p>
                +48 700 880 000<br />
                NIP 1234 657 875<br />
                misiaczek@gmail.com<br />


            </div>
        </div>
    </footer>;
}