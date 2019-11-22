import React, { FunctionComponent } from 'react';

import styles from './pokemon.scss';
import { PokemonView } from './pokemon-view/pokemon-view';
import { IPokemon } from '@/api/interfaces';

export const Pokemon: FunctionComponent<IPokemon> = (props) => {
  return (
    <div className={styles.root}>
      <PokemonView {...props} />
    </div>
  );
}
