import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { enableLogging } from 'mobx-logger';

import App from './app/app';

import { SearchFilterStore } from '@/stores/searchFilterstore';
import { PokemonStore } from '@/stores/pokemonStore';
import { PaginationStore } from './stores/paginationStore';
import { TagsFilterStore } from './stores/tagsFilterStore';

const config = {
  predicate: () => true,
  action: true,
  reaction: true,
  transaction: true,
  compute: true,
};

enableLogging(config);

const stores = {
  searchStore: new SearchFilterStore(),
  pokemonStore: new PokemonStore(),
  paginationStore: new PaginationStore(),
  tagsFilterStore: new TagsFilterStore(),
};

render(
  <Provider {...stores}>
    <App />
  </Provider>
  , document.getElementById('reactContainer'));
