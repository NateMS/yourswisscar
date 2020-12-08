import React, { Component } from 'react';

class SaleForm extends Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" });
          } else {
            this.setState({ status: "ERROR" });
          }
        };
        xhr.send(data);
      }

  render() {
    const { status } = this.state;

    if (status === "SUCCESS") {
        return (
            <div className="page page-sales-form">
                <div id="page-sales-form" class="anchor"></div>
                <div className="content-wrapper">
                    <p className="form-success">Besten Dank für Ihre Anfrage! Wir werden die Anfrage so schnell wie möglich bearbeiten.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="page page-sales-form">
            <div id="page-sales-form" class="anchor"></div>
            <div className="content-wrapper">
                <h2>Ankauf</h2>
                <p>Sie möchten Ihr Fahrzeug verkaufen? Füllen Sie dazu das Formular mit den Informationen über Ihr Fahrzeug aus.<br/>Wir melden uns bei Ihnen.</p>
                <form action="https://formspree.io/f/mqkgdzle" method="POST" onSubmit={this.submitForm}>
                    <div className="form-wrapper">
                        <div className="form-fieldset">
                            <legend>Kontaktangaben</legend>
                            <div className="form-items">
                                <div className="form-item">
                                    <label htmlFor="Vorname">Vorname</label>
                                    <input type="text" name="Vorname" required/>
                                </div>
                                <div className="form-item">
                                    <label htmlFor="Nachname">Nachname</label>
                                    <input type="text" name="Nachname" required/>
                                </div>
                                <div className="form-item">
                                    <label htmlFor="_replyto">E-Mail</label>
                                    <input type="email" name="_replyto" placeholder="email@domain.com" required/>
                                </div>
                                <div className="form-item">
                                    <label htmlFor="phone">Telefon</label>
                                    <input type="phone" name="Telefon" placeholder="+41 xx xxx xx xx" required/>
                                </div>
                            </div>
                        </div>
                        <div className="form-fieldset">
                            <legend>Informationen über das Fahrzeug</legend>
                            <div className="form-items">
                                <div className="form-item">
                                    <label htmlFor="Marke">Marke</label>
                                    <input type="text" name="Marke" placeholder="z.B. VW" required/>
                                </div>
                                <div className="form-item">
                                    <label htmlFor="Modell">Modell</label>
                                    <input type="text" name="Modell"  placeholder="z.B. Golf GTI" required/>
                                </div>
                                <div className="form-item">
                                    <label htmlFor="Kilometerstand">Kilometerstand</label>
                                    <input type="text" name="Kilometerstand" placeholder="100'000"/>
                                </div>
                                <div className="form-item">
                                    <label htmlFor="Erste Inverkehrssetzung">Erste Inverkehrssetzung</label>
                                    <input type="text" name="Erste Inverkehrssetzung" placeholder="z.B. 01.05.2015"/>
                                </div>
                                <div className="form-item">
                                    <label htmlFor="Gewünschter Preis">Gewünschter Preis (CHF)</label>
                                    <input type="text" name="Gewünschter Preis" placeholder="15'000.-" required/>
                                </div>
                                <div className="form-item form-item-textarea">
                                    <label htmlFor="Mitteilung / Bemerkung">Mitteilung / Bemerkung</label>
                                    <textarea name="Mitteilung / Bemerkung" id="message"></textarea>
                                </div>
                                <input type="text" className="gotcha" name="_gotcha" />
                                <input type="hidden" name="_subject" value="Neue Anfrage für Autoankauf" />
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="submit">Anfrage senden</button>
                    {status === "ERROR" && <p class="form-error">Ooops! Das Formular konnte leider nicht abgesendet werden. Versuchen Sie es bitte erneut oder senden Sie uns eine E-Mail.</p>}
                </form>
            </div>
        </div>
    );
  }
}

export default SaleForm;