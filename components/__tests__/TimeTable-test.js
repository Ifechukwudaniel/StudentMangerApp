import React from 'react';
import renderer from 'react-test-renderer';

import TimeTable from '../TimeTable';

it(` Time Table renders correctly`, () => {
  const tree = renderer.create( <TimeTable navigation={{}}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
