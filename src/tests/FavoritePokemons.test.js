import React from 'react';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { FavoritePokemons } from '../pages';

describe('Testando o componente Favorite Pokémon', () => {
  test('Testa se é exibida na tela a mensagem "No favorite pokemon found"', () => {
    render(
      <MemoryRouter>
        <FavoritePokemons />
      </MemoryRouter>,
    );

    const titleFavorite = screen.getByText(/No favorite pokemon found/i);
    expect(titleFavorite).toBeInTheDocument();
  });
});
