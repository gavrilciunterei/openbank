import React from 'react';
import renderer from 'react-test-renderer';
import { ContentApiOk, ContentApiAlert } from './index';
import '../../locale/index';

it('Test ContentApiOk', () => {
  const tree = renderer.create(<ContentApiOk />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Test ContentApiAlert', () => {
  const tree = renderer.create(<ContentApiOk />).toJSON();
  expect(tree).toMatchSnapshot();
});
