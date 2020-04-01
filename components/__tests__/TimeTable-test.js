import React from 'react';
import renderer from 'react-test-renderer';

import TimeTable from '../TimeTable';

it(` Time Table renders correctly`, () => {
   renderer.create( <TimeTable navigation={{}}/>);
});
