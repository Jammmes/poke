import { observable, action, computed } from 'mobx';
import { IPokemon } from '../api/interfaces';
import uniq from 'lodash/uniq';

export interface IpokemonStore {
  pokemons: IPokemon[];
  isPending: boolean;
}

export class PokemonStore {
  // @observable public pokemons: IPokemon[];
  // @observable public isPending: boolean;

  @observable public store: IpokemonStore;

  constructor() {
    this.store = {
      pokemons: [],
      isPending: false,
    };
  }

  @action public clearPokemons() {
    this.store.pokemons = [];
  }

  @action public setPokemons(newPokemons: IPokemon[]) {
    this.store.pokemons = [...newPokemons];
  }

  @action public getAllPokemons() {
    return this.store.pokemons;
  }

  // @action public getPokemonsByTag(tag: PokemonType) {
  //   return this.pokemons.filter(pokemon => pokemon.types.filter(type => type === tag));
  // }

  // @action public getPokemonsByName(tag: PokemonType) {
  //   return this.pokemons.filter(pokemon => pokemon.name === name);
  // }

  @action public getUniqTags() {
    const unpreparedTypes = this.store.pokemons.map(pokemon => pokemon.types);
    return uniq(unpreparedTypes.reduce((acc, type) => acc.concat(type)));
  }

  @action public setPendingOn() {
    this.store.isPending = true;
  }

  @action public setPendingOff() {
    this.store.isPending = false;
  }

}
