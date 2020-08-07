import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../Header';
import HeaderComponent from '../Header';

it(`Header renders correctly`, () => {
  const tree = renderer.create(<HeaderComponent screenNAme="TEST"/>).toJSON();

  expect(tree).toMatchSnapshot();
});
