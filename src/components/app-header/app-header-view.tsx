import React, { FunctionComponent } from 'react';
import { Input, PageHeader } from 'antd';
const { Search } = Input;
import 'antd/lib/input/style/css';
import 'antd/lib/page-header/style/css';

import styles from './app-header-view.scss';

import { Panel, Content } from '@/components/panel';
import { Tags } from '@/components/tags';
import { PokemonType } from '@/api/interfaces';


export interface IAppHeaderViewProps {
  types: PokemonType[];
  onSearch: () => void;
  onChange: (value: any) => void;
}
export const AppHeaderView: FunctionComponent<IAppHeaderViewProps> = (
  { types,
    onSearch,
    onChange
  }) => {
  return (
    <div className={styles.root}>
      <PageHeader title='This website provides a objects built from lines of data related to Pokémon.'>
        <Search placeholder="input pokemon name" onChange={onChange} onSearch={onSearch} enterButton />
      </PageHeader>
      <Panel className={styles.summary}>
        <Tags tags={types} />
      </Panel>
    </div>
  );
};
