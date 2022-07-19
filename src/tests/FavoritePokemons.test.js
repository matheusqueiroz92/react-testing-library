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

  //   test('', () => {
  //     render(
  //       <MemoryRouter>
  //         <FavoritePokemons
  //           favoritePokemons={ [{
  //             id: 25,
  //             name: 'Pikachu',
  //             type: 'Electric',
  //             averageWeight: {
  //               value: 6.0,
  //               measurementUnit: 'kg',
  //             },
  //             image: 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
  //             moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)',
  //             foundAt: [
  //               {
  //                 location: 'Kanto Viridian Forest',
  //                 map: 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png',
  //               },
  //               {
  //                 location: 'Kanto Power Plant',
  //                 map: 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png',
  //               },
  //             ],
  //             summary: 'This intelligent Pokémon roasts hard berries'
  //             + ' with electricity to make them tender enough to eat.',
  //           },
  //           ] }
  //         />
  //       </MemoryRouter>,
  //     );

//     const favorite = screen.getByText('Pikachu');
//     console.log(favorite);
//     expect(favorite).toBeInTheDocument();
//   });
});
