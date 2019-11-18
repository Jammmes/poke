import React, { FunctionComponent } from 'react';
import { Input } from 'antd';
const { Search } = Input;
import { PageHeader } from 'antd';
import 'antd/lib/input/style/css';
import 'antd/lib/page-header/style/css';

import styles from './app-header.scss';

export const AppHeader: FunctionComponent<{}> = () => {
  return (
    <div className={styles.root}>
      <PageHeader title='This website provides a objects built from lines of data related to Pokémon.'>
        <Search placeholder="input pokemon name" onSearch={value => console.log(value)} enterButton />
      </PageHeader>
    </div>
  )
}