import { render, screen } from '@testing-library/react';
import App from './App';

test('muestra el nombre completo', () => {
  render(<App />);
  const nombre = screen.getByText(/Joaquín Nicolás Guzmán Buitrón/i);
  expect(nombre).toBeInTheDocument();
});
