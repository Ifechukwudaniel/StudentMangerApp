import React from 'react';
import renderer from 'react-test-renderer';

import Material from '../Material';

it(` Material component renders correctly`, () => {
    renderer.create( <Material navigation={{}}/>).toJSON();
});
