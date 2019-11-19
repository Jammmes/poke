import React, { FunctionComponent } from 'react';

import styles from './pokemon-list.scss';
import { PokemonListView  } from './pokemon-list-view/pokemon-list-view';

export const PokemonList: FunctionComponent<{}> = () => {
  return (
    <div className={styles.root}>
      <PokemonListView />
    </div>
  );
};
