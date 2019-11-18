import React, { FunctionComponent } from 'react';

import styles from './pokemon.scss';

export const Pokemon: FunctionComponent<{}> = () => {
  return (
    <div className={styles.root}>Pokemon</div>
  );
}
