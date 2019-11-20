import React, { FunctionComponent, Component } from 'react';
import { Input, PageHeader } from 'antd';
import { observer, inject } from 'mobx-react';
const { Search } = Input;
import 'antd/lib/input/style/css';
import 'antd/lib/page-header/style/css';

import styles from './app-header.scss';

export interface IAppHeader {
  SearchFilterStore?: any;
}
export const AppHeader: FunctionComponent<IAppHeader> = inject('SearchFilterStore')(
  observer((props) => {
    const { SearchFilterStore } = props;
    const store = new SearchFilterStore();
    store.changeSearchFilter('zzdfgz');
    console.log(store.getSearchFilter());
    return (
    <div className={styles.root}>
      <PageHeader title='This website provides a objects built from lines of data related to Pokémon.'>
        <Search placeholder="input pokemon name" onSearch={value => console.log(value)} enterButton />
      </PageHeader>
    </div>
    );
  }));
