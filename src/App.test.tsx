import { render, screen } from '@testing-library/react';
import App from './App';

describe('Root', () => {

  test('render root', () => {
    render(<App />);
    const rootDom = screen.getByTestId("root");
    expect(rootDom).toBeInTheDocument();
  });
  
});
