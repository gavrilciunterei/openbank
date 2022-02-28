import App from './App';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

test('Render app', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
});
