import React, { FunctionComponent, useEffect, useCallback } from 'react';
import { observer, inject } from 'mobx-react';

import { AppHeaderView } from './app-header-view';
import { PokemonType } from '@/api/interfaces';
import { mockPokemons } from '@/assets/mock-data';


export interface IAppHeader {
  SearchFilterStore?: any;
  PokemonStore?: any;
}

export const AppHeader: FunctionComponent<IAppHeader> = inject('SearchFilterStore', 'PokemonStore')(
  observer((props) => {

    // Здесь происходит инициализация приложения :
    // загружаются покемоны в стор
    // обрабатываются теги

    const { SearchFilterStore, PokemonStore } = props;
    const searchStore = new SearchFilterStore();
    const pokemonStore = new PokemonStore();


    const mockPokemons2 = [
      {
        id: 1,
        name: 'pickachu',
        base_experience: 29,
        height: 50,
        weight: 40,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png',
        types: ['normal', 'fighting', 'electric', 'ground'],
      },
      {
        id: 2,
        name: 'anatoliy-iceman-vasserman-deltaplan',
        base_experience: 30000,
        height: 150000,
        weight: 700000,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png',
        types: ['normal'],
      },
    ]


    // pokemonStore.setPokemons(mockPokemons);
    const { ...data } = pokemonStore.getAllPokemons();
    console.log('before #####', data);
    pokemonStore.setPokemons(mockPokemons2);
    const { ...newData } = pokemonStore.getAllPokemons();
    console.log('after #####', newData);
    const { ...newTags } = pokemonStore.getUniqTags();
    console.log('tags #####', newTags);

    const handleOnChange = ({ target: { value } }: any) => {
      searchStore.changeSearchFilter(value);
    }

    const handleOnSearch = () => {
      console.log(searchStore.getSearchFilter());
    }

    const mockTypes: PokemonType[] = ['normal', 'psychic'];


    const appHeaderViewProps = {
      types: mockTypes,
      onSearch: handleOnSearch,
      onChange: handleOnChange,
    };

    return (
      <AppHeaderView {...appHeaderViewProps} />
    );
  }));
