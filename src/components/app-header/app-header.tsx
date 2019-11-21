import React, { FunctionComponent, useEffect } from 'react';
import { observer, inject } from 'mobx-react';

import { AppHeaderView } from './app-header-view';
import { mockPokemons } from '@/assets/mock-data';

export interface IAppHeader {
  SearchFilterStore?: any;
  PokemonStore?: any;
}

export const AppHeader: FunctionComponent<IAppHeader> = inject('SearchFilterStore', 'PokemonStore')(
  observer((props) => {

    const { SearchFilterStore, PokemonStore } = props;
    const searchStore = new SearchFilterStore();
    const pokemonStore = new PokemonStore();

    pokemonStore.setPokemons(mockPokemons);
    // console.log('after add pokemons', pokemonStore.getAllPokemons());

    const handleOnChange = ({ target: { value } }: any) => {
      searchStore.changeSearchFilter(value);
    };

    const handleOnSearch = () => {
      // todo: set filter by search
      console.log(searchStore.getSearchFilter());
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
