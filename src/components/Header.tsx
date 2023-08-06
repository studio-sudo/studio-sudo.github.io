import companyLogo from '../assets/logo-light-bg.png';
import './Header.scss';

export function Header() {
    return (
        <header>
            <div className="fancy-vector"></div>
            <div className='logo'>
                <img src={companyLogo} />
                <h1>Zmieniamy Twój biznes w kod</h1>
            </div>
            <nav>
                <a href="/#">Start</a>
                <a href="/#services">Usługi</a>
                <a href="/#contact">Kontakt</a>
                <a href="/#contact">FAQ</a>
                <a href="/#contact">Blog</a>
                <a href="/#about">O nas</a>
            </nav>
        </header>
    )
}