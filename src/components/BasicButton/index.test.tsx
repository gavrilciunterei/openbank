import React from 'react';
import renderer from 'react-test-renderer';
import BasicButton from './index';

it('Test BasicButton', () => {
  const tree = renderer
    .create(
      <BasicButton text="Botón de prueba" backgroundColor="red" color="blue" />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
