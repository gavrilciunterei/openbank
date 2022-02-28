import React from 'react';
import renderer from 'react-test-renderer';
import ImageCustom from './index';

it('Test ImageCustom', () => {
  const tree = renderer
    .create(<ImageCustom alt="test" src="./img.png" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
