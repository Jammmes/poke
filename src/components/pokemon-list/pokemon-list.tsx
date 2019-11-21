import React, { FunctionComponent } from 'react';
import { observer, inject } from 'mobx-react';

import styles from './pokemon-list.scss';
import { PokemonListView } from './pokemon-list-view/pokemon-list-view';

export interface IPokemonList {
  pokemonStore?: any;
}

export const PokemonList: FunctionComponent<IPokemonList> =  inject('pokemonStore')(observer((props) => {
  const { pokemonStore } = props;
  const { pokemons } = pokemonStore;

  return (
    <div className={styles.root}>
      {pokemons.length ? <PokemonListView pokemons={pokemons} /> : <div>please wait</div>}
    </div>
  );
}));
