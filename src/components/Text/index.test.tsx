import React from 'react';
import renderer from 'react-test-renderer';
import Text from './index';

it('Test Text', () => {
  const tree = renderer
    .create(
      <Text font-weight={400} font-size={15} max-width={200} color="red">
        Hola
      </Text>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
