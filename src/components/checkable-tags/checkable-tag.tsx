import React, { FunctionComponent, useState, useCallback } from 'react';
import { Tag as TagAnt } from 'antd';
import 'antd/lib/tag/style/css';
const { CheckableTag : CheckableTagAnt } = TagAnt;

import styles from './checkable-tags.scss';
import { PokemonType } from '@/api/interfaces';

export interface ICheckableTagProps {
  children: PokemonType;
}

export const CheckableTag: FunctionComponent<ICheckableTagProps> = ({ children }) => {

  const [isChecked, toggleCheck] = useState(false);
  const handleChange = useCallback(() => {
    toggleCheck(!isChecked);
  }, [isChecked]);

  return (
      <CheckableTagAnt checked={isChecked} onChange={handleChange}>{children}</CheckableTagAnt>
  );
};
