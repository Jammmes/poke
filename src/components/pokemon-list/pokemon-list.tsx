import React, { FunctionComponent } from 'react';

import styles from './pokemon-list.scss';

export const PokemonList: FunctionComponent<{}> = () => {
  return (
    <div className={styles.root}>Pokemon list</div>
  );
}

