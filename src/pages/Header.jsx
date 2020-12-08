import logo from './../data/logo.png';
import React, { Component } from 'react';
import Info from './Info';

class Header extends Component {
    state = {
        isTop: true,
        isChecked: false,
    };
    
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
      }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 45;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
        });
    }

    onClick(className) {
        document.getElementById("nav-checkbox").checked = false;
    }

    render() {
        return (
            <header className="App-header">
                <div className={`navigation-wrapper${ this.state.isTop ? '' : ' sticky'}`}>
                    <a onClick={this.onClick} href="#"><img src={logo} className="App-logo" alt="logo" /></a>
                    <div class="mobile-nav">
                        <div id="menuToggle">
                            <input id="nav-checkbox" type="checkbox" />
                            <span></span>
                            <span></span>
                            <span></span>
                            <ul id="menu">
                                <li><a onClick={this.onClick} href="#">Home</a></li>
                                <li><a onClick={this.onClick} href="#page-sales-form">Ankauf</a></li>
                                <li><a onClick={this.onClick} href="#page-cars">Unser Angebot</a></li>
                                <li><a onClick={this.onClick} href="#page-contact">Kontakt</a></li>
                            </ul>
                        </div>
                       
                    </div>
                    <nav>
                        <ul>
                        <li><a onClick={this.onClick} href="#">Home</a></li>
                        <li><a onClick={this.onClick} href="#page-sales-form">Ankauf</a></li>
                        <li><a onClick={this.onClick} href="#page-cars">Unser Angebot</a></li>
                        <li><a onClick={this.onClick} href="#page-contact">Kontakt</a></li>
                    </ul>
                    </nav>
                    <Info></Info>
                </div>
                <div className="content-wrapper">
                    <div className="image-text">
                        <h1>Your SwissCar GmbH</h1>
                        <span class="subtitle">Ihr Fahrzeugpartner in Schlieren</span>
                    </div>
                   </div>
            </header>
        );
    }
}

export default Header;