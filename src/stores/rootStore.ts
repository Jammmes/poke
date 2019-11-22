import { observable, action, autorun, computed } from 'mobx';
import { PaginationStore } from './paginationStore';
import { PokemonStore } from './pokemonStore';
import { TagsFilterStore } from './tagsFilterStore';
import { SearchFilterStore } from './searchFilterstore';

export class RootStore {
  public paginationStore: PaginationStore;
  public pokemonStore: PokemonStore;
  public tagsStore: TagsFilterStore;
  public searchStore: SearchFilterStore;

  constructor() {
    this.searchStore = new SearchFilterStore(this);
    this.paginationStore = new PaginationStore(this);
    this.pokemonStore = new PokemonStore(this);
    this.tagsStore = new TagsFilterStore(this);
  }
}
