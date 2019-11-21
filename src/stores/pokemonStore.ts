import { observable, action, computed, values, entries, get } from 'mobx';
import { IPokemon, PokemonType } from '../api/interfaces';
import uniq from 'lodash/uniq';

export interface IpokemonStore {
  pokemons: IPokemon[];
  filteredPokemons: IPokemon[];
  isPending: boolean;
}

export class PokemonStore {
  @observable public store: IpokemonStore;

  constructor() {
    this.store = {
      pokemons: [],
      filteredPokemons: [],
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
    return this.store.pokemons.map(pokemon => {
      return {
        id: get(pokemon, 'id'),
        name: get(pokemon, 'name'),
        base_experience: get(pokemon, 'base_experience'),
        height: get(pokemon, 'height'),
        weight: get(pokemon, 'weight'),
        image: get(pokemon, 'image'),
        types: pokemon.types.map(type => type),
      };
    });
  }

  @action public getPokemonsByTag(tag: PokemonType) {
    return this.store.pokemons.filter(pokemon => pokemon.types.filter(type => type === tag));
  }

  @action public getPokemonsByName(name: string) {
    return this.store.pokemons.filter(pokemon => pokemon.name === name);
  }

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
