import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import Background from './index';
import { render } from '../../utils/test-utils';
import '../../locale/index';

test('Test Background', () => {
  render(
    <Background>
      <div>Test</div>
    </Background>
  );
  screen.getByText('Test');
});
