import React, { FunctionComponent, useState, useCallback } from 'react';
import { Tag as TagAnt } from 'antd';
import 'antd/lib/tag/style/css';
const { CheckableTag } = TagAnt;

import styles from './tag.scss';

export const Tag: FunctionComponent<{}> = () => {

  const [isChecked, toggleCheck] = useState(false);
  const handleChange = useCallback(() => {
    toggleCheck(!isChecked);
  }, [isChecked]);

  return (
    <div className={styles.root}>
      <CheckableTag checked={isChecked} onChange={handleChange} />
    </div>
  )
}