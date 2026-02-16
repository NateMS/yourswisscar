import MapView from './MapView';
import Info from './Info';

function Contact() {
    return (
        <div className="page page-contact">
            <div id="page-contact" className="anchor"></div>
            <div className="content-wrapper">
                <h2>Kontakt</h2>
                <div className="contact-wrapper">
                    <div className="contact-left">
                        <address>
                            Your SwissCar GmbH<br/>
                            Bernstrasse 27<br/>
                            8952 Schlieren
                        </address>
                        <Info />
                    </div>
                    <MapView />
                </div>
            </div>
        </div>
    );
}

export default Contact;
