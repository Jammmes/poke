export type PokemonType =
  'normal' | 'fighting' | 'flying' | 'poison' | 'ground' | 'rock' | 'bug' |
  'ghost' | 'steel' | 'fire' | 'water' | 'grass' | 'electric' | 'psychic' |
  'ice' | 'dragon' | 'dark' | 'fairy' | 'unknown' | 'shadow';

export const matchedPokemonTypes = {
  normal: {
    id: 'normal',
    color: 'magenta',
  },
  fighting: {
    id: 'fighting',
    color: 'red',
  },
  flying: {
    id: 'flying',
    color: 'volcano',
  },
  poison: {
    id: 'poison',
    color: 'orange',
  },
  ground: {
    id: 'ground',
    color: 'gold',
  },
  rock: {
    id: 'rock',
    color: 'gray',
  },
  bug: {
    id: 'bug',
    color: 'maroon',
  },
  ghost: {
    id: 'ghost',
    color: 'cyan',
  },
  steel: {
    id: 'steel',
    color: 'blue',
  },
  fire: {
    id: 'fire',
    color: 'geekblue',
  },
  water: {
    id: 'water',
    color: 'purple',
  },
  grass: {
    id: 'grass',
    color: 'green',
  },
  electric: {
    id: 'electric',
    color: 'lime',
  },
  psychic: {
    id: 'psychic',
    color: 'yellow',
  },
  ice: {
    id: 'ice',
    color: 'wheat',
  },
  dragon: {
    id: 'dragon',
    color: '#f50',
  },
  dark: {
    id: 'dark',
    color: '#2db7f5',
  },
  fairy: {
    id: 'fairy',
    color: '#87d068',
  },
  unknown: {
    id: 'unknown',
    color: 'black',
  },
  shadow: {
    id: 'shadow',
    color: '#108ee9',
  },
};

export const getTypeColor = (type: PokemonType) => {
  const matchedType = matchedPokemonTypes[type];
  return matchedType || { id: 'unknown', color: 'black' };
};
