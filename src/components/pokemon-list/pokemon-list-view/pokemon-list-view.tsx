import React, { FunctionComponent } from 'react';

import styles from './pokemon-list-view.scss';

export const PokemonListView: FunctionComponent<{}> = () => {
  return (
    <div className={styles.root}>Pokemon list view</div>
  );
};
