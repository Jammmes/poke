export interface INamedAPIResource {
  name: string;
  url: string;
}

export interface IPokemonType {
  slot: number;
  type: INamedAPIResource;
}

export interface IPokemonAPI {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: any[];
  forms: INamedAPIResource;
  game_indices: any[];
  held_items: any;
  location_area_encounters: string;
  moves: any[];
  sprites: any;
  species: INamedAPIResource;
  stats: any[];
  types: IPokemonType[];
}

export interface ITypesAPI {
  slot: number;
  type: INamedAPIResource;
}

export interface IPokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  image: string;
  types: PokemonType[];
}

export type PokemonType =
  'normal' | 'fighting' | 'flying' | 'poison' | 'ground' | 'rock' | 'bug' |
  'ghost' | 'steel' | 'fire' | 'water' | 'grass' | 'electric' | 'psychic' |
  'ice' | 'dragon' | 'dark' | 'fairy' | 'unknown' | 'shadow';
