import React, { FunctionComponent } from 'react';
import { observer, inject } from 'mobx-react';

import { AppHeaderView } from './app-header-view';

export interface IAppHeader {
  searchStore?: any;
  pokemonStore?: any;
}

export const AppHeader: FunctionComponent<IAppHeader> = inject('searchStore', 'pokemonStore')(
  observer((props) => {

    const { searchStore, pokemonStore } = props;

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
