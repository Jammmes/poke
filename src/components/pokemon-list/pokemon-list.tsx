import React, { FunctionComponent } from 'react';
import { observer, inject } from 'mobx-react';

import styles from './pokemon-list.scss';
import { PokemonListView } from './pokemon-list-view/pokemon-list-view';

export interface IPokemonList {
  rootStore?:any;
}

export const PokemonList: FunctionComponent<IPokemonList> = inject('rootStore')(observer((props) => {
  const { rootStore } = props;
  const { pokemonStore } = rootStore;
  const { pokemons, isPending, error } = pokemonStore;
  const types = pokemonStore.getUniqTags();

  const pokemonListViewProps = {
    pokemons,
    types,
  };

  return (
    <div className={styles.root}>
      {error}
      {!isPending
      ? <PokemonListView {...pokemonListViewProps} />
      : <div className={styles.loader}>Loading, please wait ...</div>}
    </div>
  );
}));
