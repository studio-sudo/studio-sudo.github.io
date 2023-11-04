import companyLogo from '../assets/logo-light-bg.png';
import './Header.scss';
import { Link } from './Link';

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
            <Link className='logo' href='/' onClick={scrollToTop(false)}>
                <img src={companyLogo} width="160" height="48" alt="Logo firmy" />
                <h1>Zmieniamy Twój biznes w kod</h1>
            </Link>
            { isIndex && (
            <>
                <input id="nav-box" type="checkbox"/>
                <label htmlFor="nav-box"><hr/><hr/><hr/></label>
                <nav>
                    <Link href="/" onClick={scrollToTop(true)}>Start</Link>
                    <a href="/#services" onClick={scrollTo("#services")}>Usługi</a>
                    <a href="/#faq" onClick={scrollTo("#faq")}>FAQ</a>
                    <a href="/#about" onClick={scrollTo("#about")}>O nas</a>
                    <a href="/#contact" onClick={scrollTo("#contact")}>Kontakt</a>
                    <Link href='/blog'>Blog</Link>
                </nav>
            </>
            )}
        </header>
    )
}