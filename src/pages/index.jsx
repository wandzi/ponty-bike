import React from 'react';
import withLayout from '../layout';

import MainPage from '../components/MainPage/MainPage';
import AboutUs from '../components/AboutUs/AboutUs';

const IndexPage = () => (
  <>
    <MainPage />
    <AboutUs />
  </>
);

const customProps = {
  localeKey: 'home', // same as file name in src/i18n/translations/your-lang/index.js
};

export default withLayout(customProps)(IndexPage);
