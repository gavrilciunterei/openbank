import React from 'react';
import renderer from 'react-test-renderer';
import TextCreatePassword from './index';

it('Test TextCreatePassword', () => {
  const tree = renderer
    .create(<TextCreatePassword text="Prueba texto cabecera" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
