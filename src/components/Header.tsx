import companyLogo from '../assets/logo-light-bg.png';
import './Header.scss';

export function Header() {

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

    const scrollToTop = (ev: React.MouseEvent) => {
        ev.preventDefault();
        ev.stopPropagation();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <header>
            <div className='logo'>
                <img src={companyLogo} />
                <h1>Zmieniamy Twój biznes w kod</h1>
            </div>
            <nav>
                <a href="/#" onClick={scrollToTop}>Start</a>
                <a href="/#services" onClick={scrollTo("#services")}>Usługi</a>
                <a href="/#faq" onClick={scrollTo("#faq")}>FAQ</a>
                <a href="/#contact" onClick={scrollTo("#contact")}>Kontakt</a>
                <a href="/#about" onClick={scrollTo("#about")}>O nas</a>
                <a href="/#blog" onClick={scrollTo("#blog")}>Blog</a>

            </nav>
        </header>
    )
}