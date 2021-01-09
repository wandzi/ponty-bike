import React from 'react';

import ShopPage from '../components/ShopPage/ShopPage';
import withLayout from '../layout';

const Shop = () => (
  <>
    <ShopPage />
  </>
);

const customProps = {
  localeKey: 'Shop',
};

export default withLayout(customProps)(Shop);
