import { render, screen } from '@testing-library/react';
import App from './App';

test('muestra el título y las 12 cartas boca abajo', () => {
  render(<App />);
  expect(screen.getByText('Juego Memory')).toBeInTheDocument();
  expect(screen.getAllByRole('button', { name: 'Carta boca abajo' })).toHaveLength(12);
});
