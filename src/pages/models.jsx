import React from 'react';
import { FormattedMessage } from 'react-intl';

import withLayout from '../layout';
import Link from '../components/Link';

const Models = () => (
  <>
    <h1>
      <FormattedMessage id="Models.Hi from the second page" />
    </h1>
    <p>
      <FormattedMessage id="Models.Welcome to page 2" />
    </p>
    <Link to="/">
      <FormattedMessage id="Models.Go back to the homepage" />
    </Link>
  </>
);

const customProps = {
  localeKey: 'Models',
};

export default withLayout(customProps)(Models);
