import React, { FunctionComponent } from 'react';

import styles from './pokemon.scss';

import { PokemonView } from './pokemon-view/pokemon-view';

export const Pokemon: FunctionComponent<{}> = () => {
  return (
    <div className={styles.root}>
      <PokemonView />
    </div>
  );
}
