import React from 'react';

import ContactPage from '../components/ContactPage/ContactPage';
import withLayout from '../layout';

const Contact = () => (
  <>
    <ContactPage />
  </>
);

const customProps = {
  localeKey: 'Contact',
};

export default withLayout(customProps)(Contact);
