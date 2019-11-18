import React, { FunctionComponent } from 'react';
import { Button } from '@/components/button';

import styles from './footer.scss';

export const Footer: FunctionComponent<{}> = ({ children }) => {
  return (
    <footer className={styles.root}>
      <Button type='danger'>hello</Button>
      {children}
    </footer>
  );
};
