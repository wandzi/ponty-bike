import React from "react"
import { FormattedMessage } from 'react-intl';

import HeaderLogo from '../../images/header-logo.svg'
import Socials from '../SocialMedia/SocialMedia'

import './Footer.scss';

const Footer = () => {    
    return (
        <footer className="footer">
            <HeaderLogo className="footer__logo"/>
            <Socials />
        </footer>
    )
}

  export default Footer;
