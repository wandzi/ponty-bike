import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';
import Langs from '../Langs';

import './Header.scss'

import NavLogo from '../../images/nav-logo.svg'

const Header = ({ hideLangs }) => (
  <header
    style={{
      background: `black`,
      position: `fixed`,
      top: `0`,
      zIndex: `5`,
      width: '100%'
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',

      }}
    >
      <NavLogo className="nav__logo"/>
      {!hideLangs && <Langs />}
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
