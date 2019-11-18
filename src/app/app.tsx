import React from 'react';
import { Header, Content, Footer, Layout } from '@/components/layout';
import { hot } from 'react-hot-loader';

import '@/styles/global.scss';
import { AppFooter } from '@/components/app-footer';
import { AppHeader } from '@/components/app-header';

class App extends React.Component<{}> {
  public render() {
    return (
      <Layout>
        <Header>
          <AppHeader />
        </Header>
        <Content>
          Content -
          </Content>
        <Footer>
          <AppFooter />
        </Footer>
      </Layout>
    );
  }
}

export default hot(module)(App);
