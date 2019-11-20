import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';

import App from './app/app';

import { SearchFilterStore } from '@/stores/searchFilterstore';
const stores = {
  SearchFilterStore,
};

render(
<Provider {...stores}>
  <App />
</Provider>
, document.getElementById('reactContainer'));
