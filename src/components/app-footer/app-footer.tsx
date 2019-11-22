import React, { FunctionComponent } from 'react';
import { observer, inject } from 'mobx-react';
import { Pagination } from 'antd';
import 'antd/lib/pagination/style/css';

import styles from './app-footer.scss';
import { Panel, Content } from '../panel';
import { POKEMONS_COUNT } from '@/constants/app';

export interface IAppFooter {
  rootStore? :any;
}

export const AppFooter: FunctionComponent<IAppFooter> = inject('rootStore')(
  observer((props) => {

    const { rootStore } = props;
    const { paginationStore, pokemonStore } = rootStore;
    const { page, size } = paginationStore;

    const handleOnShowSizeChange = (current: number, newSize: number) => {
      paginationStore.setSize(newSize);
      pokemonStore.fetchPokemons(page, newSize);
    };

    const handleOnPageChange = (newPage: number) => {
      paginationStore.setPage(newPage);
      pokemonStore.fetchPokemons(newPage, size);
    };

    return (
      <footer className={styles.root}>
        <div className={styles.header}>
          <Panel>
            <Content fullwidth>
              <Pagination
                onChange={handleOnPageChange}
                showSizeChanger
                onShowSizeChange={handleOnShowSizeChange}
                defaultCurrent={1}
                total={POKEMONS_COUNT}
              />
            </Content>
          </Panel>
        </div>
        <div className={styles.footer}>pokedex 2019</div>
      </footer>
    );
  },
  ));
