import React from 'react';
import { screen, render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../App';
import pokemons from '../data';
import Pokemon from '../components/Pokemon';
import { PokemonDetails } from '../pages';

describe('Testando o componente PokemonDetails', () => {
  test('Teste se as informações do pokémon são mostradas na tela', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <PokemonDetails pokemons={ pokemons } />
      </Router>,
    );
  });
});
