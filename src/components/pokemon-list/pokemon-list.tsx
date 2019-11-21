import React, { FunctionComponent } from 'react';
import { observer, inject } from 'mobx-react';

import styles from './pokemon-list.scss';
import { PokemonListView } from './pokemon-list-view/pokemon-list-view';

export interface IPokemonList {
  pokemonStore?: any;
}

export const PokemonList: FunctionComponent<IPokemonList> = inject('pokemonStore')(observer((props) => {
  const { pokemonStore } = props;
  const { pokemons, isPending } = pokemonStore;
  const types = pokemonStore.getUniqTags();

  const pokemonListViewProps = {
    pokemons,
    types
  }

  return (
    <div className={styles.root}>
      {!isPending ? <PokemonListView {...pokemonListViewProps} /> : <div className={styles.loader}>Loading, please wait ...</div>}
    </div>
  );
}));
