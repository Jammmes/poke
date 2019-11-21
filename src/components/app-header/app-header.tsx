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

    pokemonStore.fetchPokemons();

    const handleOnChange = ({ target: { value } }: any) => {
      searchStore.changeSearchFilter(value);
    };

    const handleOnSearch = () => {
      // todo: set filter by search
      // console.log(searchStore.getSearchFilter());
    };

    const [...types] = pokemonStore.getUniqTags();

    // todo: add filter by checked tags
    const appHeaderViewProps = {
      types,
      onSearch: handleOnSearch,
      onChange: handleOnChange,
    };

    return (
      <AppHeaderView {...appHeaderViewProps} />
    );
  }));
