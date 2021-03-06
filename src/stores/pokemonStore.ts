import { observable, action, get, autorun } from 'mobx';
import { IPokemon, INamedAPIResource, ITypesAPI } from '../api/interfaces';
import uniq from 'lodash/uniq';
import intersection from 'lodash/intersection';
import axios from 'axios';
import { POKEMON_LIST_ENPOINT, POKEMON_FORM_FRONT_ENDPOINT } from '@/api/endpoints';
import { RootStore } from './rootStore';

export class PokemonStore {
  @observable public pokemons: IPokemon[];
  @observable public filteredPokemons: IPokemon[];
  @observable public isPending: boolean;
  @observable public error: string;

  constructor(root: RootStore) {
    this.pokemons = [];
    this.filteredPokemons = [];
    this.isPending = false;
    this.error = '';
    autorun(() => {
      const searchFilter = root.searchStore.filter;
      const tagsFilter = root.tagsStore.filter.map(tag => tag);
      const filteredPokemons = this.getAllPokemons()
        .filter(pokemon => tagsFilter.length ? intersection(pokemon.types.map(type => type), tagsFilter).length : true)
        .filter(pokemon => pokemon.name.includes(searchFilter));
      this.setFilteredPokemons(filteredPokemons);
    });
  }

  @action public setFilteredPokemons(pokemons: IPokemon[]) {
    this.filteredPokemons = [...pokemons];
  }

  @action public setPokemons(newPokemons: IPokemon[]) {
    this.pokemons = [...newPokemons];
  }

  @action public fetchPokemons(page: number = 1, size: number = 10) {

    this.setPendingOn();
    const offset = (page - 1) * size;

    axios.get(POKEMON_LIST_ENPOINT(offset < 0 ? 0 : offset, size))
      .then((response) => {
        const { data: { results } } = response;
        const promiseArray = results.map((pokemon: INamedAPIResource) => axios.get(pokemon.url));
        return Promise.all(promiseArray);
      })
      .then((pokemons: any[]) => {
        const fetchedPokemons = pokemons.map((pokemon: any) => {
          const { id, name, height, weight, base_experience, types } = pokemon.data;
          const typeNames = types.map((typeAPI: ITypesAPI) => {
            const { type: { name } } = typeAPI;
            return name;
          });
          return {
            id,
            name,
            base_experience,
            height,
            weight,
            image: POKEMON_FORM_FRONT_ENDPOINT(id),
            types: typeNames,
          };
        });
        this.setPokemons(fetchedPokemons);
        this.setFilteredPokemons(fetchedPokemons);
      })
      .catch((error) => this.error = error)
      .finally(() => {
        this.setPendingOff();
      },
      );
  }

  @action public getAllPokemons() {
    return this.pokemons.map(pokemon => {
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

  @action public getUniqTags() {
    const unpreparedTypes = this.pokemons.map(pokemon => pokemon.types);
    return unpreparedTypes.length ? uniq(unpreparedTypes.reduce((acc, type) => acc.concat(type))) : [];
  }

  @action public setPendingOn() {
    this.isPending = true;
  }

  @action public setPendingOff() {
    this.isPending = false;
  }

}
