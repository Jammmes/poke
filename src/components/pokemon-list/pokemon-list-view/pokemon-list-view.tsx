import React, { FunctionComponent } from 'react';

import styles from './pokemon-list-view.scss';
import { Panel } from '@/components/panel';
import { Pokemon } from '@/components/pokemon/pokemon';

export interface IPokemonListViewProps{
  pokemons: any[];
}

export const PokemonListView: FunctionComponent<IPokemonListViewProps> = ({ pokemons }) => {
  return (
    <div className={styles.root}>
      <Panel className= {styles.list}>
        {pokemons.map(pokemon => <Pokemon key={pokemon.id} {...pokemon} />)}
      </Panel>
      <Panel className={styles.summary}>
          tags
      </Panel>
    </div>
  );
};
