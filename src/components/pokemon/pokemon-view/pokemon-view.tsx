import React, { FunctionComponent } from 'react';
import { Card, Tag, Statistic  } from 'antd';
import 'antd/lib/card/style/css';
import 'antd/lib/tag/style/css';
import 'antd/lib/statistic/style/css';

import styles from './pokemon-view.scss';
import { PokemonType } from '@/api/interfaces';
import { Panel, Header, Content, Footer } from '@/components/panel';

export interface IPokemonViewProps {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  image: string;
  types: PokemonType[];
}

export const PokemonView: FunctionComponent<IPokemonViewProps> = (
  {
    name,
    base_experience,
    height,
    weight,
    image,
    types,
  },
) => {
  return (
      <Panel className={styles.root}>
        <Header>
          {name}
        </Header>
        <Content className={styles.content}>
        <img  className={styles.image} src={image} alt='...'/>
          <div className={styles.info}>
          <Statistic title='Expirience' value ={base_experience} />
          <Statistic title='height' value ={height} />
          <Statistic title='weight' value ={weight} />
          </div>
        </Content>
        <Footer>
        <div className ={styles.tags}>
            {types.map(tag => <Tag key={tag}>{tag}</Tag>)}
          </div>
        </Footer>
      </Panel>
  );
};
