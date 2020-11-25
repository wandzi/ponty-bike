import React from 'react';
import renderer from 'react-test-renderer';

import Header from './index';

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Header siteTitle="PontyBike" hideLangs={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
