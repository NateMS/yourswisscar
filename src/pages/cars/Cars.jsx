import React, { Component } from 'react';
import CarsTable from './CarsTable';
import Pagination from './Pagination';
import data from '../../data/example_data.json';

class Cars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      cars: [],
      currentPage: 1,
      count: data.count,
      itemsPerPage: 20,
    };
  }

  async componentDidMount() {
    try {
      this.setDataFromApi(this.state.currentPage)
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  async setDataFromApi(page) {
      //const response = await fetch('https://www.autoscout24.ch/webapp/v92/infopage/vehicles/2093798?page=' + this.state.currentPage);
      //const data = await response.json();
      this.setState({
        cars: data.vehicles.items,
        count: data.count,
        itemsPerPage: data.vehicles.items.length,
      });
  }

  changePage = (page) =>  {
    if (page === this.state.currentPage) {
      return;
  }
    this.setDataFromApi(page);
    this.setState({currentPage: page});
  }

  render() {
    return (
      <div className="page cars-page">
        <div class="content-wrapper">
            <h2>{this.state.count} Autos im Angebot</h2>
            <Pagination changePage={this.changePage} currentPage={this.state.currentPage} totalItems={this.state.count} itemsPerPage={this.state.itemsPerPage}></Pagination>
            <CarsTable cars={this.state.cars} total={this.state.count}></CarsTable>
            <Pagination changePage={this.changePage} currentPage={this.state.currentPage} totalItems={this.state.count} itemsPerPage={this.state.itemsPerPage}></Pagination>
        </div>
      </div>
    );
  }
}

export default Cars;