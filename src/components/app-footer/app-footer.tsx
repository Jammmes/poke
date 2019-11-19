import React, { FunctionComponent, useCallback } from 'react';
import { Pagination } from 'antd';
import 'antd/lib/pagination/style/css';

import styles from './app-footer.scss';
import { Panel, Content } from '../panel';

export const AppFooter: FunctionComponent<{}> = () => {

  const handleOnShowSizeChange = useCallback(() => {
    console.log('change');
  }, []);

  return (
  <footer className={styles.root}>
    <div className={styles.header}>
    <Panel>
      <Content fullwidth>
      <Pagination
        showSizeChanger
        onShowSizeChange={handleOnShowSizeChange}
        defaultCurrent={3}
        total={500}
      />
      </Content>
    </Panel>
    </div>
    <div className={styles.footer}>pokemon list 2019</div>
   </footer>
  );
};
