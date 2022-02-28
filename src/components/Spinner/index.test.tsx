import React from 'react';
import renderer from 'react-test-renderer';
import Spinner from './index';

it('Test Spinner', () => {
  const tree = renderer.create(<Spinner />).toJSON();
  expect(tree).toMatchSnapshot();
});
