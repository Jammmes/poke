import React, { FunctionComponent } from 'react';
import { observer, inject } from 'mobx-react';

import { AppHeaderView } from './app-header-view';

export interface IAppHeader {
  rootStore?: any;
}

export const AppHeader: FunctionComponent<IAppHeader> = inject('rootStore')(
observer((props) => {

  const { rootStore } = props;
  const { pokemonStore, searchStore } = rootStore;

  pokemonStore.fetchPokemons(1, 20);

  const handleOnChange = ({ target: { value } }: any) => {
    searchStore.changeSearchFilter(value);
  };

  const appHeaderViewProps = {
    onChange: handleOnChange,
  };

  return (
    <AppHeaderView {...appHeaderViewProps} />
  );
}));
