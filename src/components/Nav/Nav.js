import React, { useState } from "react"
import { Link } from "gatsby"
import Langs from '../Langs/Langs'
import SocialMedia from '../SocialMedia/SocialMedia'
import HeaderLogo from '../../images/header-logo.svg'

import './Nav.scss';

const Nav = (props) => {

    const showLangs = props.showLangs;

    const [menuActive, setMenuState] = useState(false);
    let isActive, isOpened;

    const handleClick = () => {
        setMenuState((prevMenuActive) => !prevMenuActive)
    }
    
    if(!menuActive) {
        isActive = 'navTrigger';
        isOpened = {height:'0%'}
    } else {
        isActive = 'navTrigger active'
        isOpened = {height:'100%'}
    }
    
    /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
    const myFunction = () => {
        document.getElementById("myDropdown").classList.toggle("show");
    }
  

    return (
        <nav className="nav">
            <div className="nav__fullwidth">
                <Link to="/" replace className="nav__fullwidth__menu-item nav__fullwidth__menu-item--first">O nas</Link> 
                <div class="dropdown">
                    <a className="dropbtn nav__fullwidth__menu-item" onClick={myFunction}>
                        Modele
                    </a>
                    <div className="dropdown-content" id="myDropdown">
                        <Link to="/performance/" replace className="nav__fullwidth__menu-item nav__fullwidth__menu-item--expand">Performance</Link>
                        <Link to="/longrange/" replace className="nav__fullwidth__menu-item nav__fullwidth__menu-item--expand">Long Range</Link>
                    </div>
                </div> 
                <Link to="/gallery/" replace className="nav__fullwidth__menu-item">Galeria</Link>
                <Link to="/services/" replace className="nav__fullwidth__menu-item">Usługi</Link>
                <Link to="/shop" replace target="_blank" className="nav__fullwidth__menu-item">Sklep</Link>
                <Link to="/faq/" replace className="overlay-content__menu-item overlay-content__menu-item--almost-last">FAQ</Link>
                <Link to="/contact/" replace className="nav__fullwidth__menu-item menu-item--last">Kontakt</Link>
                <div className="overlay-content__socials">
                    {!showLangs && <Langs />}
                </div>  
            </div>
            <div className={isActive} role="button" onClick={handleClick} onKeyDown={handleClick}>
                <i></i>
                <i></i>
                <i></i>
            </div>
            <div id="myNav" className="overlay" style={isOpened}>
                <div className="overlay-content">
                    <Link to="/">
                        <HeaderLogo className="overlay-content__logo"/>
                    </Link>
                    <Link to="/" replace className="overlay-content__menu-item">O Nas</Link> 
                    <Link to="/performance/" replace className="overlay-content__menu-item">Performance</Link>
                    <Link to="/longrange/" replace className="overlay-content__menu-item">Long Range</Link>
                    <Link to="/gallery/" replace className="overlay-content__menu-item">Galeria</Link>
                    <Link to="/services/" replace className="overlay-content__menu-item">Usługi</Link>
                    <Link to="/shop" replace target="_blank" className="overlay-content__menu-item">Sklep</Link>
                    <Link to="/faq/" replace className="overlay-content__menu-item">FAQ</Link>
                    <Link to="/contact/" replace className="overlay-content__menu-item overlay-content__menu-item--last">Kontakt</Link>
                    <div className="overlay-content__socials">
                        <SocialMedia />
                        {!showLangs && <Langs />}
                    </div>  
                </div> 
            </div>
        </nav>
    )
}

export default Nav
