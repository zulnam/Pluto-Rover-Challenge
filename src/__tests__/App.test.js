import { render } from '@testing-library/react';
import App from '../components/App';

it('renders the main app', () => {
  const div = document.createElement('div');
  const { container } = render(<App />, div);
  expect(container.firstChild).toMatchSnapshot();
});
