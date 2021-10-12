import React from 'react';

import ContactLogo from '../../images/nav-logo.svg'
import AllegroLogo from '../../images/socials/allegro.svg'
import ContactForm from '../ContactForm/ContactForm';

import './ContactPage.scss';

const ContactPage = () => {
    return (
        <section className="contact-section">
            <div className="contact-section__contact-details">
                <address className="contact-details">
                    <ContactLogo className="contact-section__logo"/>
                    <div className="contact-details--container">
                        <span>Tel:</span><a href="tel:+48787486288" className="contact-details__contact-detail">787-486-288 </a><br />
                        <span>E-mail:</span><a href="mailto:biuro@pontybike.pl" className="contact-details__contact-detail">biuro@pontybike.pl</a><br />
                        <span>Warszowice, Śląskie</span>
                    </div>
                </address>
                <ContactForm action="https://www.flexyform.com/f/332ffa1364c4aff3119f61f3acc1241c9c83ea07"/>
            </div>
            <hr className="contact-section__horizontal-line"/>
            <a href="https://allegro.pl/uzytkownik/Sklep_Pontybike" target="_blank" className="contact-section__allegro-logo">
                <AllegroLogo />
            </a>
        </section>
    )
}



export default ContactPage;