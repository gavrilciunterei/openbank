import React from 'react';
import renderer from 'react-test-renderer';
import { TrackInput, FirstInfo, PasswordInputs } from './index';
import FormCursom from '../FormCursom';
import '../../locale/index';

it('Test FirstInfo', () => {
  const tree = renderer.create(<FirstInfo />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Test TrackInput', () => {
  const tree = renderer
    .create(
      <FormCursom
        initialValues={{
          password: 'Contrasena1234',
          repeatPassword: 'Contrasena1234',
          track: 'Pruebaaa',
        }}
        onSubmit={() => console.log('test ')}
        validationSchema={{}}
      >
        <TrackInput track="Hola" />
      </FormCursom>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Test PasswordInputs', () => {
  const tree = renderer
    .create(
      <FormCursom
        initialValues={{
          password: 'Contrasena1234',
          repeatPassword: 'Contrasena1234',
          track: 'Pruebaaa',
        }}
        onSubmit={() => console.log('test ')}
        validationSchema={{}}
      >
        <PasswordInputs />
      </FormCursom>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
