import React, { Component } from 'react';

class SaleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', email: '', value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

  render() {
    return (
        <div className="page page-sales-form">
            <div className="content-wrapper">  
                <form onSubmit={this.handleSubmit}>
                    <div className="form-item">
                        <label for="name">Name</label>
                        <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
                    </div>
                    <div className="form-item">
                        <label for="email">E-Mail</label>
                        <input type="email" name="email" value={this.state.value} onChange={this.handleChange}  />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
  }
}

export default SaleForm;