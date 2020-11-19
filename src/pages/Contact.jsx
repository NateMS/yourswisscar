import React, { Component } from 'react';
import MapView from './MapView'

class Contact extends Component {
  render() {
    return (
        <div className="page page-contact">
            <div className="content-wrapper">  
                <h2>Kontakt</h2>
                <address>
                    Your SwissCar GmbH<br/>
                    Bernstrasse 27<br/>
                    8952 Schlieren
                </address>
            </div>
            <MapView></MapView>
        </div>
    );
  }
}

export default Contact;