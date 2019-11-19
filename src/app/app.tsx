import React from 'react';
import { Header, Content, Footer, Layout } from '@/components/layout';
import { hot } from 'react-hot-loader';

import '@/styles/global.scss';
import { AppFooter } from '@/components/app-footer';
import { AppHeader } from '@/components/app-header';
import { PokemonList } from '@/components/pokemon-list';

class App extends React.Component<{}> {
  public render() {
    return (
      <Layout>
        <Header>
          <AppHeader />
        </Header>
        <Content>
          <PokemonList/>
        </Content>
        <Footer>
          <AppFooter />
        </Footer>
      </Layout>
    );
  }
}

export default hot(module)(App);
