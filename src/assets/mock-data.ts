import { IPokemon } from '@/api/interfaces';

export const mockPokemons: IPokemon[] = [
  {
    id: 1,
    name: 'pickachu',
    base_experience: 29,
    height: 50,
    weight: 40,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png',
    types: ['normal', 'fighting', 'electric', 'psychic', 'poison', 'ground'],
  },
  {
    id: 2,
    name: 'anatoliy-iceman-vasserman-deltaplan',
    base_experience: 30000,
    height: 150000,
    weight: 700000,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png',
    types: ['ice'],
  },
  {
    id: 3,
    name: 'dragon',
    base_experience: 59,
    height: 250,
    weight: 65,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
    types: ['grass', 'dragon'],
  },
  {
    id: 4,
    name: 'man',
    base_experience: 49,
    height: 10,
    weight: 44,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png',
    types: ['normal', 'fighting'],
  },
  {
    id: 5,
    name: 'sito',
    base_experience: 39,
    height: 15,
    weight: 89,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png',
    types: ['fire', 'fighting'],
  },
  {
    id: 6,
    name: 'aqua',
    base_experience: 19,
    height: 22,
    weight: 65,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png',
    types: ['water', 'fighting'],
  },
];
