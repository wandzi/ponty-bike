import React from 'react';

import ModelsPageLongRange from '../components/ModelsPageLongRange/ModelsPageLongRange';
import withLayout from '../layout';

const LongRange = () => (
  <>
    <ModelsPageLongRange />
  </>
);

const customProps = {
  localeKey: 'Models',
};

export default withLayout(customProps)(LongRange);
