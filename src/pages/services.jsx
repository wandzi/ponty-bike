import React from 'react';

import ServicesPage from '../components/ServicesPage/ServicesPage';
import withLayout from '../layout';

const Services = () => (
  <>
    <ServicesPage />
  </>
);

const customProps = {
  localeKey: 'Services',
};

export default withLayout(customProps)(Services);
