import ProductInformation from './index';
import '../../locale/index';
import { screen, fireEvent } from '@testing-library/react';
import { render } from '../../utils/test-utils';

test('Render ProductInformation, put in true the checkbox and click next/cancel', () => {
  render(<ProductInformation />);

  const checkbox = screen.getByText(
    'I am of legal age and I accept the processing of data according to the data protection policy.'
  );
  fireEvent.click(checkbox);

  const buttonCancel = screen.getByText('Cancel');
  fireEvent.click(buttonCancel);

  const bottonNextPage = screen.getByText('Next');
  fireEvent.click(bottonNextPage);
});
