import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import App from './App';

test('renders counter', () => {
  render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
  const counterElement = screen.getByText(/counter/i);
  expect(counterElement).toBeInTheDocument();
});
