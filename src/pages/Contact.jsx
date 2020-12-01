import React, { Component } from 'react';
import MapView from './MapView';
import Info from './Info';

class Contact extends Component {
  render() {
    return (
        <div className="page page-contact">
            <div id="page-contact" class="anchor"></div>
            <div className="content-wrapper">  
                <h2>Kontakt</h2>
                <div className="contact-wrapper">
                  <div className="contact-left">
                    <address>
                        Your SwissCar GmbH<br/>
                        Bernstrasse 27<br/>
                        8952 Schlieren
                    </address>
                    <Info></Info>
                  </div>
                  <MapView></MapView>
                </div>
            </div>
        </div>
    );
  }
}

export default Contact;