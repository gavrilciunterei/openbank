import React from 'react';
import renderer from 'react-test-renderer';
import ContentContainer from './index';

it('Test ContentContainer', () => {
  const tree = renderer
    .create(
      <ContentContainer>
        <div>
          <h1> Hola </h1>
        </div>
      </ContentContainer>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
