import React, { FunctionComponent } from 'react';

import styles from './pokemon-view.scss';
import { PokemonType } from '@/api/interfaces';

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
    id,
    name,
    base_experience,
    height,
    weight,
    image,
    types,
  },
) => {
  return (
    <div className={styles.root}>
      <div>{id}</div>
      <div>{name}</div>
      <div>{base_experience}</div>
      <div>{height}</div>
      <div>{weight}</div>
      <img src={image} alt='...'/>
      <div>{types}</div>
    </div>
  );
};
