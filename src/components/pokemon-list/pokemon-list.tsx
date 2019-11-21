import React, { FunctionComponent } from 'react';
import { observer, inject } from 'mobx-react';

import styles from './pokemon-list.scss';
import { PokemonListView } from './pokemon-list-view/pokemon-list-view';

export interface IPokemonList {
  pokemonStore?: any;
}

export const PokemonList: FunctionComponent<IPokemonList> =  inject('pokemonStore')(observer((props) => {
  const { pokemonStore } = props;
  const pokemons = pokemonStore.getAllPokemons();
  return (
    <div className={styles.root}>
      <PokemonListView pokemons={pokemons} />
    </div>
  );
}));
