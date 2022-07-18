import React from 'react';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { About } from '../pages';

describe('Testando o componente About', () => {
  test('Testa se a página contém as informações sobre a Pokédex', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>,
    );

    const titleAbout = screen.getByRole('heading', { name: /About Pokédex/i, level: 2 });
    expect(titleAbout).toBeDefined();

    const text1About = screen.getByText('This application simulates a Pokédex, '
    + 'a digital encyclopedia containing all Pokémons');
    expect(text1About).toBeInTheDocument();

    const text2About = screen.getByText('One can filter Pokémons by type, and '
    + 'see more details for each one of them');
    expect(text2About).toBeInTheDocument();

    const imageAbout = screen.getByAltText('Pokédex');
    expect(imageAbout.src).toContain('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
