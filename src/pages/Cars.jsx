import React, { Component } from 'react';

class Cars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://www.autoscout24.ch/de/hci/list?design=3825&filter=8685',
    };
  }

  render() {
    return (
      <div className="page cars-page">
        <div id="page-cars" class="anchor"></div>
        <div class="content-wrapper">
            <h2>Unser Autoangebot</h2>
            <div data-embedded-src={this.state.url} class="embedded-content-area"></div>
        </div>
      </div>
    );
  }
}

export default Cars;