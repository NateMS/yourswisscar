import logo from './../data/logo.png';
import React, { Component } from 'react';
import Info from './Info';

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
                    <Info></Info>
                </div>
                <div className="content-wrapper">
                    <h1>Your SwissCar GmbH</h1>
                </div>
            </header>
        );
    }
}

export default Header;