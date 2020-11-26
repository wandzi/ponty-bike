import React from 'react';
import { FormattedMessage } from 'react-intl';

import withLayout from '../layout';
import Link from '../components/Link';

import MainPage from '../components/MainPage/MainPage';
import AboutUs from '../components/AboutUs/AboutUs';

const IndexPage = () => (
  <>

    <MainPage />
    <AboutUs />

    
    <Link to="/page-2/">
      <FormattedMessage id="home.Go to page 2" />
    </Link>
  </>
);

const customProps = {
  localeKey: 'home', // same as file name in src/i18n/translations/your-lang/index.js
};

export default withLayout(customProps)(IndexPage);
