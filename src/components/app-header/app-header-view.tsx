import React, { FunctionComponent } from 'react';
import { Input, PageHeader } from 'antd';
const { Search } = Input;
import 'antd/lib/input/style/css';
import 'antd/lib/page-header/style/css';

import styles from './app-header-view.scss';

import { Panel, Content } from '@/components/panel';
import { PokemonType } from '@/api/interfaces';
import { CheckableTags } from '../checkable-tags';

export interface IAppHeaderViewProps {
  types: PokemonType[];
  onSearch: () => void;
  onChange: (value: any) => void;
}
export const AppHeaderView: FunctionComponent<IAppHeaderViewProps> = (
  { types,
    onSearch,
    onChange,
  }) => {
  return (
    <div className={styles.root}>
      <PageHeader title='This website provides a objects built from lines of data related to Pokémon.'>
        <Search placeholder="input pokemon name" onChange={onChange} onSearch={onSearch} enterButton />
      </PageHeader>
      <Panel className={styles.summary}>
        <CheckableTags tags={types} />
      </Panel>
    </div>
  );
};
