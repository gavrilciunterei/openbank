import React from 'react';
import renderer from 'react-test-renderer';
import BottomButtons from './index';

it('Test BottomButtons', () => {
  const tree = renderer
    .create(
      <BottomButtons>
        <div>
          <button> botón 1 </button>
          <button> botón 2 </button>
        </div>
      </BottomButtons>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
