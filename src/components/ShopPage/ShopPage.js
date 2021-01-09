import React from "react"
import { Link } from "gatsby"
import AllegroLogo from '../../images/socials/allegro.svg'
import './ShopPage.scss';

const ShopPage = () => (
        <section className="shop-section">
            <Link to="https://allegro.pl/uzytkownik/Sklep_Pontybike" target="_blank" className="shop-section__allegro-logo">
                <AllegroLogo />
            </Link>
            <h1 className="shop-section__kicker">Przy zakupie bezpośrednim oferujemy rabaty.</h1>
        </section>
    )

export default ShopPage
