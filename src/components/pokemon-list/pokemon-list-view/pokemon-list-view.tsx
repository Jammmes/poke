import React, { FunctionComponent } from 'react';

import styles from './pokemon-list-view.scss';

import { Panel } from '@/components/panel';
import { Pokemon } from '@/components/pokemon/pokemon';
import { IPokemon, PokemonType } from '@/api/interfaces';
import { CheckableTags } from '@/components/checkable-tags';

export interface IPokemonListViewProps {
  pokemons: IPokemon[];
  types: PokemonType[];
}

export const PokemonListView: FunctionComponent<IPokemonListViewProps> = ({ pokemons, types }) => {
  return (
    <div className={styles.root}>
      <Panel className={styles.summary}>
        <CheckableTags tags={types} />
      </Panel>
      <Panel className={styles.list}>
        {pokemons.map(pokemon => <Pokemon key={pokemon.id} {...pokemon} />)}
      </Panel>
    </div>
  );
};
