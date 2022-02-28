import ProductInformation from './index';
import { MemoryRouter } from 'react-router';
import store from '../../store/rootStore';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import '../../locale/index';
import { render, screen, fireEvent } from '@testing-library/react';

test('Render ProductInformation', () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <ProductInformation />
      </Provider>
    </MemoryRouter>
  );

  const checkbox = screen.getByText(
    'I am of legal age and I accept the processing of data according to the data protection policy.'
  );
  fireEvent.click(checkbox);

  const bottonNextPage = screen.getByText('Next');
  fireEvent.click(bottonNextPage);

  const buttonCancel = screen.getByText('Cancel');
  fireEvent.click(buttonCancel);
});
