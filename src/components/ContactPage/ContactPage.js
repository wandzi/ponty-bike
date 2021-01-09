import React from 'react';

import ContactLogo from '../../images/nav-logo.svg'
import AllegroLogo from '../../images/socials/allegro.svg'

import './ContactPage.scss';

const ContactPage = () => {
    return (
        <section className="contact-section">
            <ContactLogo className="contact-section__logo"/>
            <div className="contact-section__contact-details">
                <address className="contact-details">
                    <span>Tel:</span><a href="tel:+48787486288" className="contact-details__contact-detail">787-486-288 </a><br />
                    <span>E-mail:</span><a href="mailto:biuro@pontybike.pl" className="contact-details__contact-detail">biuro@pontybike.pl</a>
                </address>
            </div>
            <hr className="contact-section__horizontal-line"/>
            <a href="https://allegro.pl/uzytkownik/Sklep_Pontybike" target="_blank" className="contact-section__allegro-logo">
                <AllegroLogo />
            </a>
        </section>
    )
}



export default ContactPage;