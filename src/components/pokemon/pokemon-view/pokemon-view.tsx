import React, { FunctionComponent } from 'react';
import { Typography } from 'antd';
import 'antd/lib/typography/style/css';
const { Text } = Typography;

import styles from './pokemon-view.scss';
import { IPokemon } from '@/api/interfaces';
import { Panel, Header, Content, Footer } from '@/components/panel';
import { Tags } from '@/components/tags';



export const PokemonView: FunctionComponent<IPokemon> = (
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
