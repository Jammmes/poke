import { RootStore } from '../../src/stores/rootStore';
import { IPokemon } from '@/api/interfaces';

let rootStore = new RootStore();

export const mockPokemons: IPokemon[] = [
  {
    id: 1,
    name: 'nikolay',
    base_experience: 29,
    height: 50,
    weight: 40,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png',
    types: ['water'],
  },
  {
    id: 2,
    name: 'anatoliy',
    base_experience: 30000,
    height: 150000,
    weight: 700000,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png',
    types: ['fire'],
  },
  {
    id: 3,
    name: 'sergey',
    base_experience: 59,
    height: 250,
    weight: 65,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
    types: ['grass', 'water'],
  },
  {
    id: 4,
    name: 'oleg',
    base_experience: 49,
    height: 10,
    weight: 44,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png',
    types: ['water', 'fighting'],
  },
];

describe('stores test', () => {

  afterEach(() => {
    rootStore = new RootStore();
  });

  it('searchStore - shoud change filter from empty to ABC', () => {
    const { searchStore } = rootStore;
    const previousResult = searchStore.getSearchFilter();
    searchStore.changeSearchFilter('ABC');
    const nextResult = searchStore.getSearchFilter();
    expect(previousResult).toBe('');
    expect(nextResult).toBe('ABC');
  });

  it('paginationStore - shoud change page from 0 to 4', () => {
    const { paginationStore } = rootStore;
    const previousResult = paginationStore.page;
    paginationStore.setPage(4);
    const nextResult = paginationStore.page;
    expect(previousResult).toBe(0);
    expect(nextResult).toBe(4);
  });

  it('paginationStore - shoud change size from 10 to 50', () => {
    const { paginationStore } = rootStore;
    const previousResult = paginationStore.size;
    paginationStore.setSize(50);
    const nextResult = paginationStore.size;
    expect(previousResult).toBe(10);
    expect(nextResult).toBe(50);
  });

  it('tagsStore - shoud add new tag to filter', () => {
    const { tagsStore } = rootStore;
    const previousResult = [...tagsStore.filter];
    tagsStore.addTagToFilter('grass');
    const nextResult = [...tagsStore.filter];
    expect(previousResult).toMatchObject([]);
    expect(nextResult).toMatchObject(['grass']);
  });

  it('tagsStore - shoud remove tag from filter', () => {
    const { tagsStore } = rootStore;
    tagsStore.addTagToFilter('grass');
    tagsStore.addTagToFilter('fire');
    const beforeRemoveResult = [...tagsStore.filter];
    tagsStore.removeTagFromFilter('grass');
    const afterRemoveResult = [...tagsStore.filter];
    expect(beforeRemoveResult).toMatchObject(['grass', 'fire']);
    expect(afterRemoveResult).toMatchObject(['fire']);
  });

  it('pokemonStore - shoud set isPending On/Off', () => {
    const { pokemonStore } = rootStore;
    const previousResult = pokemonStore.isPending;
    pokemonStore.setPendingOn();
    const afterOnResult = pokemonStore.isPending;
    pokemonStore.setPendingOff();
    const afterOffResult = pokemonStore.isPending;
    expect(previousResult).toBeFalsy();
    expect(afterOnResult).toBeTruthy();
    expect(afterOffResult).toBeFalsy();
  });

  it('pokemonStore - shoud get uniq tags', () => {
    const { pokemonStore } = rootStore;
    pokemonStore.setPokemons(mockPokemons);
    const tags = pokemonStore.getUniqTags();
    expect(tags).toMatchObject(['water', 'fire', 'grass', 'fighting']);
  });

});
