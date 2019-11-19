import React, { FunctionComponent } from 'react';

import styles from './pokemon.scss';

import { PokemonView, IPokemonViewProps } from './pokemon-view/pokemon-view';

export const Pokemon: FunctionComponent<IPokemonViewProps> = (props) => {
  return (
    <div className={styles.root}>
      <PokemonView {...props}/>
    </div>
  );
}
