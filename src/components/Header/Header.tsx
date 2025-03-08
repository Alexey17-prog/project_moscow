import './Header.css';
import { Logo } from './Logo';
import { Slogan } from './Slogan';
import { ContactInfo } from './ContactInfo';
import { NavMenu } from './NavMenu';
import { InfoBanner } from './InfoBanner';

export const Header = () => {
    return (
        <header>
            <div className="header-top">
                <div className="container header-top-content">
                    <Logo />
                    <Slogan />
                    <ContactInfo />
                </div>
            </div>
            <NavMenu />
            <InfoBanner />
        </header>
    );
};