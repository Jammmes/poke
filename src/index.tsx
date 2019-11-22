import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { enableLogging } from 'mobx-logger';

import App from './app/app';

import { RootStore } from './stores/rootStore';

const config = {
  predicate: () => true,
  action: true,
  reaction: true,
  transaction: true,
  compute: true,
};

enableLogging(config);

const stores = {
  rootStore: new RootStore(),
};

render(
  <Provider {...stores}>
    <App />
  </Provider>
  , document.getElementById('reactContainer'));
