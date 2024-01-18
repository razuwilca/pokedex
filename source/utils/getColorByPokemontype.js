import { COLOURS_POKEMON } from "./constants/";

const getColorByPokemon = (type) => COLOURS_POKEMON[type.toLowerCase()];

export default getColorByPokemon;
