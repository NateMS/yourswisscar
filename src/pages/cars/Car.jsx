import React, { Component } from 'react';

class Car extends Component {

  render() {
      let link = "https://www.autoscout24.ch/de/d/" + this.props.car.slug + "?vehid=" + this.props.car.id;
    return (
        <a className="car" href={link} target="_blank">
            <div className="img-wrapper">
                <img src={this.props.car.images[0]} alt={this.props.car.title}/>
            </div>
            <div className="content-item title">{this.props.car.title}</div>
            <div className="content-item price">{this.props.car.prices[0]}</div>
            <div className="content-item items">
                <div className="item">{this.props.car.mileage} / {this.props.car.firstReg}</div>
                <div className="item">{this.props.car.transmission}</div>
                <div className="item">{this.props.car.hp} ({this.props.car.kw})</div>
                <div className="item">{this.props.car.fuel}</div>
            </div>
        </a>
    );
  }
}

export default Car;