import React, { FunctionComponent } from 'react';
import { observer, inject } from 'mobx-react';
import { Pagination } from 'antd';
import 'antd/lib/pagination/style/css';

import styles from './app-footer.scss';
import { Panel, Content } from '../panel';
import { POKEMONS_COUNT } from '@/constants/app';

export interface IAppFooter {
  paginationStore?: any;
}

export const AppFooter: FunctionComponent<IAppFooter> = inject('paginationStore')(
  observer((props) => {

    const { paginationStore } = props;
    const handleOnShowSizeChange = (size: number) => {
      paginationStore.setSize(size);
    };

    const handleOnPageChange = (page: number) => {
      paginationStore.setPage(page);
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
    <div className={styles.footer}>pokemon list 2019</div>
   </footer>
    );
  },
));
