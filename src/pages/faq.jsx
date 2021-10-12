import React from 'react';

import FAQPage from '../components/FAQPage/FAQPage';
import withLayout from '../layout';

const FAQ = () => (
  <>
    <FAQPage />
  </>
);

const customProps = {
  localeKey: 'FAQ',
};

export default withLayout(customProps)(FAQ);
