import logo from './../data/logo.png';
import { useState, useEffect, useCallback } from 'react';
import Info from './Info';

function Header() {
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsTop(window.scrollY < 45);
        };
        document.addEventListener('scroll', handleScroll);
        return () => document.removeEventListener('scroll', handleScroll);
    }, []);

    const closeNav = useCallback(() => {
        document.getElementById("nav-checkbox").checked = false;
    }, []);

    return (
        <header className="App-header">
            <div className={`navigation-wrapper${isTop ? '' : ' sticky'}`}>
                <a onClick={closeNav} href="#top"><img src={logo} className="App-logo" alt="logo" /></a>
                <div className="mobile-nav">
                    <div id="menuToggle">
                        <input id="nav-checkbox" type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="menu">
                            <li><a onClick={closeNav} href="#top">Home</a></li>
                            <li><a onClick={closeNav} href="#page-sales-form">Ankauf</a></li>
                            <li><a onClick={closeNav} href="#page-cars">Unser Angebot</a></li>
                            <li><a onClick={closeNav} href="#page-contact">Kontakt</a></li>
                        </ul>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li><a onClick={closeNav} href="#top">Home</a></li>
                        <li><a onClick={closeNav} href="#page-sales-form">Ankauf</a></li>
                        <li><a onClick={closeNav} href="#page-cars">Unser Angebot</a></li>
                        <li><a onClick={closeNav} href="#page-contact">Kontakt</a></li>
                    </ul>
                </nav>
                <Info />
            </div>
            <div className="content-wrapper">
                <div className="image-text">
                    <h1>Your SwissCar GmbH</h1>
                    <span className="subtitle">Ihr Fahrzeugpartner in Schlieren</span>
                </div>
            </div>
        </header>
    );
}

export default Header;
