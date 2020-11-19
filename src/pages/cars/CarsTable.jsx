import React, { Component } from 'react';
import Car from './Car';
class CarsTable extends Component {
  render() {
    let content = '';
    if (this.props.cars.length === 0) {
      content = <p>Keine Autos gefunden</p>;
    } else {
      content = 
        <div id="cars-table" className="cars-table">
          {this.props.cars.map((car) =>
            <Car key={car.id} car={car}></Car>
          )}
        </div>;
    }
    
    return (
      <div>
          {content}
      </div>
    );
  }
}

export default CarsTable;