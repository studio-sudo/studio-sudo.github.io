import { NavLink } from 'react-router-dom';
import companyLogo from '../assets/logo-light-bg.png';
import './Header.scss';

export function Header({ isIndex }: { isIndex: boolean }) {

    const scrollTo = (selector: string) => (ev: React.MouseEvent) => {
        const element = document.querySelector(selector);
        if (!element) return;
        ev.preventDefault();
        ev.stopPropagation();
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        });
    }

    const scrollToTop = (prevent: boolean) => (ev: React.MouseEvent) => {
        if (prevent) {
            ev.preventDefault();
            ev.stopPropagation();
        }
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <header>
            <NavLink className='logo' to='/' onClick={scrollToTop(false)}>
                <img src={companyLogo} width="160" height="48" alt="Logo firmy" />
                <h1>Zmieniamy Twój biznes w kod</h1>
            </NavLink>
            { isIndex && (
            <>
                <input id="nav-box" type="checkbox"/>
                <label htmlFor="nav-box"><hr/><hr/><hr/></label>
                <nav>
                    <NavLink to="/#" onClick={scrollToTop(true)}>Start</NavLink>
                    <a href="/#services" onClick={scrollTo("#services")}>Usługi</a>
                    <a href="/#faq" onClick={scrollTo("#faq")}>FAQ</a>
                    <a href="/#about" onClick={scrollTo("#about")}>O nas</a>
                    <a href="/#contact" onClick={scrollTo("#contact")}>Kontakt</a>
                    <NavLink to='/blog'>Blog</NavLink>
                </nav>
            </>
            )}
        </header>
    )
}