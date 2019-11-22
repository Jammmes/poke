import React, { FunctionComponent } from 'react';
import { observer, inject } from 'mobx-react';

import { AppHeaderView } from './app-header-view';

export interface IAppHeader {
  rootStore?: any;
}

export const AppHeader: FunctionComponent<IAppHeader> = inject('rootStore')(
  observer(({ rootStore }) => {

    const { pokemonStore, searchStore } = rootStore;

    pokemonStore.fetchPokemons(1, 10);

    const handleOnChange = ({ target: { value } }: any) => {
      searchStore.changeSearchFilter(value);
    };

    return (
      <AppHeaderView onChange={handleOnChange} />
    );
  }));
