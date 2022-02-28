import Feedback from './index';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';

import store from '../../store/rootStore';
import { Provider } from 'react-redux';
import '../../locale/index';

test('Render feedback', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Feedback />
      </MemoryRouter>
    </Provider>
  );
});
