import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Lexicon title', () => {
  render(<App />);
  const title = screen.getByText(/Lexicon/i);
  expect(title).toBeInTheDocument();
});
