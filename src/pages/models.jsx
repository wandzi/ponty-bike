import React from 'react';

import ModelsPage from '../components/ModelsPage/ModelsPage';
import withLayout from '../layout';

const Models = () => (
  <>
    <ModelsPage />
  </>
);

const customProps = {
  localeKey: 'Models',
};

export default withLayout(customProps)(Models);
