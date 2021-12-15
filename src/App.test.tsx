import { render, screen } from '@testing-library/react';
import App from './app';

test('renders app with todo list', () => {
  render(<App />);
  const title = screen.getByText(/My Tasks/i);
  expect(title).toBeInTheDocument();
});
