import React, { FunctionComponent, useState } from 'react';
import { inject, observer } from 'mobx-react';
import { Tag as TagAnt } from 'antd';
import 'antd/lib/tag/style/css';
const { CheckableTag: CheckableTagAnt } = TagAnt;

import { PokemonType } from '@/api/interfaces';

export interface ICheckableTagProps {
  children: PokemonType;
  rootStore?: any;
}

export const CheckableTag: FunctionComponent<ICheckableTagProps> = inject('rootStore')(
  observer(({ children, rootStore }) => {

    const { tagsStore } = rootStore;
    const [isChecked, toggleCheck] = useState(false);

    const handleChange = () => {
      toggleCheck(!isChecked);
      !isChecked
        ? tagsStore.addTagToFilter(children)
        : tagsStore.removeTagFromFilter(children);
    };

    return (
      <CheckableTagAnt checked={isChecked} onChange={handleChange}>{children}</CheckableTagAnt>
    );
  }))
  ;
