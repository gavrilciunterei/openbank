import React from 'react';
import renderer from 'react-test-renderer';
import { FirstInfo, SecoundInfo } from './index';
import '../../locale/index';

it('Test FirstInfo', () => {
  const tree = renderer.create(<FirstInfo />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Test SecoundInfo', () => {
  const tree = renderer.create(<SecoundInfo />).toJSON();
  expect(tree).toMatchSnapshot();
});
