import React, { FunctionComponent } from 'react';

import styles from './pokemon-list-view.scss';

import { Panel } from '@/components/panel';
import { Pokemon } from '@/components/pokemon/pokemon';
import { IPokemon } from '@/api/interfaces';

export interface IPokemonListViewProps {
  pokemons: IPokemon[];
}

export const PokemonListView: FunctionComponent<IPokemonListViewProps> = ({ pokemons }) => {
  return (
    <div className={styles.root}>
      <Panel className={styles.list}>
        {pokemons.map(pokemon => <Pokemon key={pokemon.id} {...pokemon} />)}
      </Panel>
    </div>
  );
};
