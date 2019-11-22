import React, { FunctionComponent } from 'react';
import { observer, inject } from 'mobx-react';

import styles from './pokemon-list.scss';
import { PokemonListView } from './pokemon-list-view/pokemon-list-view';

export interface IPokemonList {
  rootStore?: any;
}

export const PokemonList: FunctionComponent<IPokemonList> = inject('rootStore')(observer(({ rootStore }) => {

  const { pokemonStore } = rootStore;
  const { filteredPokemons, isPending, error } = pokemonStore;
  const types = pokemonStore.getUniqTags();

  const pokemonListViewProps = {
    pokemons: filteredPokemons,
    types,
  };

  return (
    <div>
      {error}
      {!isPending
        ? <PokemonListView {...pokemonListViewProps} />
        : <div className={styles.loader}>Loading, please wait ...</div>}
    </div>
  );
}));
