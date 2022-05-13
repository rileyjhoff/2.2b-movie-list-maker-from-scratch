import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Movie Card text', () => {
  render(<App />);
  const textElement = screen.getByText(/Movie Card/i);
  expect(textElement).toBeInTheDocument();
});
