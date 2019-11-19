import React, { FunctionComponent } from 'react';
import { Typography } from 'antd';
import 'antd/lib/typography/style/css';
const { Text } = Typography;

import styles from './pokemon-view.scss';
import { PokemonType } from '@/api/interfaces';
import { Panel, Header, Content, Footer } from '@/components/panel';
import { Tags } from '@/components/tags';

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
        <div title={name} className={styles.title}>{name}</div>
      </Header>
      <Content className={styles.content}>
        <img className={styles.image} src={image} alt='...' />
        <div className={styles.info}>
          <Text strong>Expirience: </Text>
          <Text code>{base_experience}</Text>
        </div>
        <div className={styles.info}>
          <Text strong>Height: </Text>
          <Text code>{height}</Text>
        </div>
        <div className={styles.info}>
          <Text strong>Weight: </Text>
          <Text code>{weight}</Text>
        </div>
      </Content>
      <Footer>
        <Tags tags={types} />
      </Footer>
    </Panel>
  );
};
