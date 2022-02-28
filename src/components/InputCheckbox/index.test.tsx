import React from 'react';
import renderer from 'react-test-renderer';
import InputCheckbox from './index';

it('Test InputCheckbox', () => {
  const tree = renderer
    .create(
      <InputCheckbox
        checked={false}
        handleOnChange={() => true}
        text="Prueba checkbox"
        name="Check"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
