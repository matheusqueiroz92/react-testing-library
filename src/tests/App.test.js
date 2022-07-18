import React from 'react';
import { screen, render } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Teste do componente App', () => {
  test('1. Testa se contém um conjunto fixo de links de navegação', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const titlePokedex = screen.getByRole('heading', { name: /Pokédex/i, level: 1 });
    const linkHome = screen.getByRole('link', { name: /Home/i });
    const linkAbout = screen.getByRole('link', { name: /About/i });
    const linkFavorite = screen.getByRole('link', { name: /Favorite Pokémons/i });

    expect(titlePokedex).toBeInTheDocument();
    expect(linkHome).toBeInTheDocument();
    expect(linkAbout).toBeInTheDocument();
    expect(linkFavorite).toBeInTheDocument();
  });

  test('2. Teste se é redirecionada para a página inicial ao clicar em Home', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const linkHome = screen.getByRole('link', { name: /Home/i });
    userEvent.click(linkHome);

    const headingHome = screen.getByRole('heading',
      { name: /Encountered pokémons/i, level: 2 });
    expect(headingHome).toBeInTheDocument();
  });

  test('3. Teste se é redirecionada para a página About ao clicar em About', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const linkAbout = screen.getByRole('link', { name: /About/i });
    userEvent.click(linkAbout);

    const headingAbout = screen.getByRole('heading',
      { name: /About Pokédex/i, level: 2 });
    expect(headingAbout).toBeInTheDocument();
  });

  test('4. Teste se é redirecionada para a página Pokémons Favoritos', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const linkFavorite = screen.getByRole('link', { name: /Favorite Pokémons/i });
    userEvent.click(linkFavorite);

    const headingFavorite = screen.getByRole('heading',
      { name: /Favorite Pokémons/i, level: 2 });
    expect(headingFavorite).toBeInTheDocument();
  });

  test('5. Teste se é redirecionada para a página Not Found com URL desconhecida', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    history.push('/matheus');

    const notFound = screen.getByText(/Page requested not found/i);
    expect(notFound).toBeInTheDocument();
  });
});
