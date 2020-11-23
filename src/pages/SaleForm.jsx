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
            <div id="page-sales-form" class="anchor"></div>
            <div className="content-wrapper">
                <h2>Ankauf</h2>
                <p>Sie möchten Ihr Fahrzeug verkaufen? Füllen Sie dazu das Formular mit den Informationen über Ihr Fahrzeug aus.<br/>Wir melden uns bei Ihnen.</p>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-wrapper">
                        <div className="form-fieldset">
                            <legend>Kontaktangaben</legend>
                            <div className="form-items">
                                <div className="form-item">
                                    <label for="firstname">Vorname</label>
                                    <input type="text" name="firstname" value={this.state.value} onChange={this.handleChange} />
                                </div>
                                <div className="form-item">
                                    <label for="lastname">Nachname</label>
                                    <input type="text" name="lastname" value={this.state.value} onChange={this.handleChange} />
                                </div>
                                <div className="form-item">
                                    <label for="email">E-Mail</label>
                                    <input type="email" name="email" value={this.state.value} onChange={this.handleChange}  />
                                </div>
                                <div className="form-item">
                                    <label for="phone">Telefon</label>
                                    <input type="phone" name="phone" value={this.state.value} onChange={this.handleChange}  />
                                </div>
                            </div>
                        </div>
                        <div className="form-fieldset">
                            <legend>Informationen über das Fahrzeug</legend>
                            <div className="form-items">
                                <div className="form-item">
                                    <label for="brand">Marke</label>
                                    <input type="text" name="brand" value={this.state.value} onChange={this.handleChange} />
                                </div>
                                <div className="form-item">
                                    <label for="model">Model</label>
                                    <input type="text" name="model" value={this.state.value} onChange={this.handleChange} />
                                </div>
                                <div className="form-item">
                                    <label for="mileage">Kilometerstand</label>
                                    <input type="text" name="mileage" value={this.state.value} onChange={this.handleChange}  />
                                </div>
                                <div className="form-item">
                                    <label for="age">Erste Inverkehrssetzung</label>
                                    <input type="text" name="age" value={this.state.value} onChange={this.handleChange}  />
                                </div>
                                <div className="form-item">
                                    <label for="price">Gewünschter Preis</label>
                                    <input type="text" name="price" value={this.state.value} onChange={this.handleChange}  />
                                </div>
                                <div className="form-item form-item-textarea">
                                    <label for="message">Mitteilung / Bemerkung</label>
                                    <textarea name="message" id="message" onChange={this.handleChange}>{this.state.value}</textarea>
                                </div>
                            </div>
                        </div>
                    </div>                    
                    <input class="submit" type="submit" value="Anfrage Senden" />
                </form>
            </div>
        </div>
    );
  }
}

export default SaleForm;