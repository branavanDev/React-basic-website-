// src/App.test.jsx
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(document.body).toBeTruthy();
  });

  test('contains welcome message', () => {
    render(<App />);
    const welcomeElement = screen.getByText(/welcome/i);
    expect(welcomeElement).toBeInTheDocument();
  });
});