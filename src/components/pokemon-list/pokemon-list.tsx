import React, { FunctionComponent } from 'react';

import styles from './pokemon-list.scss';
import { PokemonListView } from './pokemon-list-view/pokemon-list-view';

import { mockPokemons } from '@/assets/mock-data';

export const PokemonList: FunctionComponent<{}> = () => {

  return (
    <div className={styles.root}>
      <PokemonListView pokemons={mockPokemons} />
    </div>
  );
};
