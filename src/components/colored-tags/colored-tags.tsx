import React, { FunctionComponent } from 'react';
import { Tag } from 'antd';
import 'antd/lib/tag/style/css';

import styles from './colored-tags.scss';

import { PokemonType } from '@/api/interfaces';
import { getTypeColor } from '@/utils/tags';

export interface IColoredTagsProps {
  tags: PokemonType[];
}

export const ColoredTags: FunctionComponent<IColoredTagsProps> = ({ tags }) => {
  return (
    <div className={styles.tags}>
      {tags.map(tag => {
        const color = getTypeColor(tag);
        return <Tag color={color.color} key={tag}>{tag}</Tag>;
      })}
    </div>
  );
};
