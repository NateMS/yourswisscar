import logo from './../data/logo.png';
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <header className="App-header">
            <div className="content-wrapper">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        </header>
    );
  }
}

export default Header;