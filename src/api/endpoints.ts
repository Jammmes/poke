export const POKEMON_LIST_ENPOINT = (page: number, size: number) => `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=${size}`;
export const POKEMON_ENPOINT = (id: string) => `https://pokeapi.co/api/v2/pokemon/${id}`;
export const POKEMON_FORMS_ENPOINT = (id: string) => `https://pokeapi.co/api/v2/pokemon-form/${id}`;
export const POKEMON_FORM_FRONT = (id: string) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
export const POKEMON_FORM_BACK = (id: string) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`;
