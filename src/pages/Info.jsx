import React, { Component } from 'react';

class Info extends Component {
  render() {
    return (
      <div className="info">
        <div className="contact">
            <a href="tel:+4179 680 34 44">079 680 34 44</a>
            <a href="mailto:info@yourswisscar.ch">info@yourswisscar.ch</a>
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
    );
  }
}

export default Info;