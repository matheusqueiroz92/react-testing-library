import React from 'react';
import { screen, render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
// import userEvent from '@testing-library/user-event';
import App from '../App';
import userEvent from '@testing-library/user-event';
import pokemons from '../data';
import Pokemon from '../components/Pokemon';

const pokemonProp = pokemons[0];
const favoriteProp = true;
const showDetailsProp = true;

describe('Teste do componente Pokemon', () => {
  test('1. Testa se é renderizado um card com as informações do pokémon', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    const namePokemon = screen.getByTestId('pokemon-name');
    expect(namePokemon).toBeInTheDocument();

    const typePokemon = screen.getByTestId('pokemon-type');
    expect(typePokemon).toBeInTheDocument();

    const weightPokemon = screen.getByTestId('pokemon-weight');
    expect(weightPokemon).toBeInTheDocument();
    expect(weightPokemon).toHaveTextContent('Average weight:');
    expect(weightPokemon).toHaveTextContent('kg');

    const imagePokemon = screen.getByAltText('Pikachu sprite');
    expect(imagePokemon).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  test('2. Testa se o card do pokémon contém um link de navegação dos detalhes', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    const linkDetails = screen.getByRole('link', { name: /More details/i });
    expect(linkDetails).toBeDefined();
  });

  test('3. Testa se ao clicar no link detalhes do pokémon, '
  + 'é feito o redirecionamento para a página de detalhes', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    const linkDetails = screen.getByRole('link', { name: /More details/i });
    expect(linkDetails).toBeDefined();

    userEvent.click(linkDetails);

    const titlePageDatails = screen.getByRole('heading',
      { name: /Pikachu Details/i, level: 2 });
    expect(titlePageDatails).toBeInTheDocument();
  });

  test('4. Testa se existe um ícone de estrela nos pokémons favoritados', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <Pokemon
          pokemon={ pokemonProp }
          isFavorite={ favoriteProp }
          showDetailsLink={ showDetailsProp }
        />
      </Router>,
    );

    const typePokemon = screen.getByText('Electric');
    console.log(typePokemon);
    const iconFavorite = screen.getByAltText('Pikachu is marked as favorite');
    expect(iconFavorite).toHaveAttribute('src', '/star-icon.svg');
    expect(iconFavorite).toBeInTheDocument();
    expect(typePokemon).toBeInTheDocument();
  });
});
