import React from 'react';
import { screen, render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testando componente Pokedex', () => {
  test('1. Testa se a página contém um h2 com o texto "Encountered pokémons"', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    const titlePokedex = screen.getByRole('heading', {
      name: /Encountered pokémons/i, level: 2 });
    expect(titlePokedex).toBeInTheDocument();
  });

  test('2. Testa se é exibido o próximo Pokémon quando o botão é clicado', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    const button = screen.getByRole('button', { name: /Próximo Pokémon/i });
    expect(button).toBeDefined();

    const pokemonName = screen.getByTestId('pokemon-name');
    expect(pokemonName).toBeInTheDocument();

    const pokemon0 = screen.getByText('Pikachu');
    expect(pokemon0).toBeDefined();

    // Click 1
    userEvent.click(button);

    const pokemon1 = screen.getByText('Charmander');
    expect(pokemon1).toBeDefined();

    // Click 2
    userEvent.click(button);
    const pokemon2 = screen.getByText('Caterpie');
    expect(pokemon2).toBeDefined();

    // Click 3
    userEvent.click(button);
    const pokemon3 = screen.getByText('Ekans');
    expect(pokemon3).toBeDefined();

    // Click 4
    userEvent.click(button);
    const pokemon4 = screen.getByText('Alakazam');
    expect(pokemon4).toBeDefined();

    // Click 5
    userEvent.click(button);
    const pokemon5 = screen.getByText('Mew');
    expect(pokemon5).toBeDefined();

    // Click 6
    userEvent.click(button);
    const pokemon6 = screen.getByText('Rapidash');
    expect(pokemon6).toBeDefined();

    // Click 7
    userEvent.click(button);
    const pokemon7 = screen.getByText('Snorlax');
    expect(pokemon7).toBeDefined();

    // Click 8
    userEvent.click(button);
    const pokemon8 = screen.getByText('Dragonair');
    expect(pokemon8).toBeDefined();

    // Click 9 - Volta para o primeiro Pokémon
    userEvent.click(button);
    const pokemonPrimeiro = screen.getByText('Pikachu');
    expect(pokemonPrimeiro).toBeDefined();
  });

  test('3. Testa se a Pokédex tem os botões de filtro', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    const buttonAll = screen.getByRole('button', { name: /All/i });
    expect(buttonAll).toBeInTheDocument();

    const buttonTestId = screen.getAllByTestId('pokemon-type-button');
    console.log(buttonTestId);

    userEvent.click(buttonAll);
    const pokemonAll = screen.getByText('Pikachu');
    expect(pokemonAll).toBeDefined();
    const buttonNext = screen.getByRole('button', { name: 'Próximo pokémon' });
    expect(buttonNext).toBeEnabled();

    const buttonElectric = screen.getByRole('button', { name: /Electric/i });
    expect(buttonElectric).toBeInTheDocument();

    userEvent.click(buttonElectric);
    const pokemonElectric = screen.getByText('Pikachu');
    expect(pokemonElectric).toBeDefined();
    expect(buttonNext).toBeDisabled();

    const buttonFire = screen.getByRole('button', { name: /Fire/i });
    expect(buttonFire).toBeInTheDocument();

    userEvent.click(buttonFire);
    const pokemonFire = screen.getByText('Charmander');
    expect(pokemonFire).toBeDefined();
    expect(buttonNext).toBeEnabled();

    const buttonBug = screen.getByRole('button', { name: /Bug/i });
    expect(buttonBug).toBeInTheDocument();

    userEvent.click(buttonBug);
    const pokemonBug = screen.getByText('Caterpie');
    expect(pokemonBug).toBeDefined();
    expect(buttonNext).toBeDisabled();

    const buttonPoison = screen.getByRole('button', { name: /Poison/i });
    expect(buttonPoison).toBeInTheDocument();

    userEvent.click(buttonPoison);
    const pokemonPoison = screen.getByText('Ekans');
    expect(pokemonPoison).toBeDefined();
    expect(buttonNext).toBeDisabled();

    const buttonPsychic = screen.getByRole('button', { name: /Psychic/i });
    expect(buttonPsychic).toBeInTheDocument();

    userEvent.click(buttonPsychic);
    const pokemonPsychic = screen.getByText('Alakazam');
    expect(pokemonPsychic).toBeDefined();
    expect(buttonNext).toBeEnabled();

    const buttonNormal = screen.getByRole('button', { name: /Normal/i });
    expect(buttonNormal).toBeInTheDocument();

    userEvent.click(buttonNormal);
    const pokemonNormal = screen.getByText('Snorlax');
    expect(pokemonNormal).toBeDefined();
    expect(buttonNext).toBeDisabled();

    const buttonDragon = screen.getByRole('button', { name: /Dragon/i });
    expect(buttonDragon).toBeInTheDocument();

    userEvent.click(buttonDragon);
    const pokemonDragon = screen.getByText('Dragonair');
    expect(pokemonDragon).toBeDefined();
    expect(buttonNext).toBeDisabled();
  });
});
