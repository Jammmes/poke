import React, { FunctionComponent } from 'react';
import { Input, PageHeader } from 'antd';
import 'antd/lib/input/style/css';
import 'antd/lib/page-header/style/css';

import styles from './app-header-view.scss';

export interface IAppHeaderViewProps {
  onChange: (value: any) => void;
}

export const AppHeaderView: FunctionComponent<IAppHeaderViewProps> = ({ onChange }) => {
  return (
    <div className={styles.root}>
      <PageHeader title='This website provides a objects built from lines of data related to Pokémon.'>
        <Input placeholder="input pokemon name for searching" onChange={onChange} />
      </PageHeader>
    </div>
  );
};
