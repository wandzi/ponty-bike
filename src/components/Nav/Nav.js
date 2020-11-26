import React, { useState } from "react"
import { Link } from "gatsby"
import Langs from '../Langs/Langs'
import SocialMedia from '../SocialMedia/SocialMedia'
import HeaderLogo from '../../images/header-logo.svg'

import './Nav.scss';

const Nav = (props) => {

    const showLangs = props.showLangs;

    const [menuActive, setMenuState] = useState(false);
    let isActive, isOpened, isColored;

    const handleClick = () => {
        setMenuState((prevMenuActive) => !prevMenuActive)
    }
    
    if(!menuActive) {
        isActive = 'navTrigger';
        isOpened = {height:'0%'}
    } else {
        isActive = 'navTrigger active'
        isOpened = {height:'100%'}
        isColored = {backgroundColor: '#FFFFFF'}
    }
    
    return (
        <nav className="nav">
            <div className={isActive} role="button" onClick={handleClick} onKeyDown={handleClick}>
                <i style={isColored}></i>
                <i style={isColored}></i>
                <i style={isColored}></i>
            </div>
            <div id="myNav" className="overlay" style={isOpened}>
                <div className="overlay-content">
                    <HeaderLogo className="overlay-content__logo"/>
                    <Link to="/" className="overlay-content__menu-item">O Nas</Link> 
                    <Link to="/Models/" className="overlay-content__menu-item">Modele</Link>
                    <Link to="/" className="overlay-content__menu-item">Galeria</Link>
                    <Link to="/" className="overlay-content__menu-item">Usługi</Link>
                    <Link to="/" className="overlay-content__menu-item">Sklep</Link>
                    <Link to="/" className="overlay-content__menu-item overlay-content__menu-item--last">Kontakt</Link>
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
