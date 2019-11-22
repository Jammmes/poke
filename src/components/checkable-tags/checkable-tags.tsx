import React, { FunctionComponent } from 'react';

import styles from './checkable-tags.scss';

import { PokemonType } from '@/api/interfaces';
import { CheckableTag } from './checkable-tag';

export interface ICheckableTagsProps {
  tags: PokemonType[];
}

export const CheckableTags: FunctionComponent<ICheckableTagsProps> = ({ tags }) => {
  return (
    <div className={styles.root}>
    {tags.map(tag => <CheckableTag key={tag}>{tag}</CheckableTag>)}
    </div>
  );
};
