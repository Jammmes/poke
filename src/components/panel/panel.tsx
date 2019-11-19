import React, { FunctionComponent } from 'react';
import cn from 'classnames';

import styles from './panel.scss';

export interface IPanel {
  className?: string;
}

export const Panel: FunctionComponent<IPanel> = ({ children, className = '' }) => {
  return (
    <div className={cn(styles.root, className)}>{children}</div>
  );
};
