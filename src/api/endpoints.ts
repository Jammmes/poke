export const POKEMON_LIST_ENPOINT = (page: number, size: number) => `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=${size}`;
export const POKEMON_FORM_FRONT_ENDPOINT = (id: number) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
export const POKEMON_FORM_BACK_ENDPOINT = (id: number) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`;
