import React from 'react';
import { screen, render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testando o componente PokemonDetails', () => {
  test('Teste se as informações do pokémon são mostradas na tela', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    const buttonDetails = screen.getByRole('link', { name: /More details/i });

    userEvent.click(buttonDetails);

    const titleDetails = screen.getByRole('heading',
      { name: /Pikachu Details/i, level: 2 });
    expect(titleDetails).toBeDefined();
  });
});
