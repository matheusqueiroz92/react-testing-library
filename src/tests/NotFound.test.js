import React from 'react';
import { screen, render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../App';

describe('Testando o componente NotFound', () => {
  test('Testa se a página contém um h2 com o texto "Page requested not found"', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    history.push('/matheus');

    const titleNotFound = screen.getByText(/Page requested not found/i);
    expect(titleNotFound).toBeInTheDocument();

    const imageNotFound = screen.getByAltText('Pikachu crying because '
    + 'the page requested was not found');
    expect(imageNotFound).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
