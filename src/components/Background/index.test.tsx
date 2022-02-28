import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Background from './index';
import '../../locale/index';

import store from '../../store/rootStore';
import { Provider } from 'react-redux';

test('Test Background', () => {
  render(
    <Provider store={store}>
      <Background>
        <div>Test</div>
      </Background>
    </Provider>
  );
  screen.getByText('Test');
});
