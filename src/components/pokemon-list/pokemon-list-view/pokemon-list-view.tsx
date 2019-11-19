import React, { FunctionComponent } from 'react';
import uniq from 'lodash/uniq';

import styles from './pokemon-list-view.scss';
import { Panel, Header, Content } from '@/components/panel';
import { Pokemon } from '@/components/pokemon/pokemon';
import { IPokemon } from '@/api/interfaces';
import { Tags } from '@/components/tags';

export interface IPokemonListViewProps {
  pokemons: IPokemon[];
}

export const PokemonListView: FunctionComponent<IPokemonListViewProps> = ({ pokemons }) => {

  const getTags = (pokemons: IPokemon[]) => {
    const unpreparedTypes = pokemons.map(pokemon => pokemon.types);
    return uniq(unpreparedTypes.reduce((acc, type) => acc.concat(type)));
  }

  const types = getTags(pokemons);

  return (
    <div className={styles.root}>
      <Panel className={styles.summary}>
        <Header> Filter by tags</Header>
        <Content>
          <Tags tags={types} />
        </Content>
      </Panel>
      <Panel className={styles.list}>
        {pokemons.map(pokemon => <Pokemon key={pokemon.id} {...pokemon} />)}
      </Panel>
    </div>
  );
};
