import logo from './../data/logo.png';
import React, { Component } from 'react';

class Header extends Component {
    state = {
        isTop: true
    };
    
    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 45;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
        });
    }

    render() {
        return (
            <header className="App-header">
                <div className={`navigation-wrapper${ this.state.isTop ? '' : ' sticky'}`}>
                    <img src={logo} className="App-logo" alt="logo" />
                    
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#page-sales-form">Ankauf</a></li>
                            <li><a href="#page-cars">Unser Angebot</a></li>
                            <li><a href="#page-contact">Kontakt</a></li>
                        </ul>
                    </nav>
                    <div className="info">
                        <div className="contact">
                            <a href="tel:+4179 680 34 44">079 680 34 44</a>
                            <a href="mailto:info@yourswisscar.com">info@yourswisscar.com</a>
                        </div>
                        <div className="opening-times">
                            <span className="row">
                                <span className="day">Mo - Fr</span>
                                <span className="time">10:30 - 18:00</span>
                            </span>
                            <span className="row">
                                <span className="day">Sa</span>
                                <span className="time">10:30 - 15:00</span>
                            </span>
                            <span className="row">
                                <span className="day">So</span>
                                <span className="time">geschlossen</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="content-wrapper">
                    <h1>Your SwissCar GmbH</h1>
                </div>
            </header>
        );
    }
}

export default Header;