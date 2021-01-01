import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Nav from '../Nav/Nav'

import './Header.scss'

import NavLogo from '../../images/nav-logo.svg'

const Header = ({ hideLangs }) => (
  <header className="header">
    <div className="header__nav"    >
      <Link to="/" className="overlay-content__menu-item">      
        <NavLogo className="nav__logo"/>                 
      </Link>
      <Nav showLangs={hideLangs}/>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  hideLangs: PropTypes.bool,
};

Header.defaultProps = {
  siteTitle: ``,
  hideLangs: false,
};

export default Header;
