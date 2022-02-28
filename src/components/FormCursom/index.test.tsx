import React from 'react';
import renderer from 'react-test-renderer';
import FormCustom from './index';

it('Test FormCustom', () => {
  const tree = renderer
    .create(
      <FormCustom
        onSubmit={() => console.log('click')}
        initialValues={{ password: '' }}
        validationSchema={{}}
      >
        <div>Test</div>
      </FormCustom>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
