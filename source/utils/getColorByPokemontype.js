import { COLOURS_POKEMON } from "./constants/";

const getColorByPokemon = (type) => COLOURS_POKEMON[type.toLowerCase()];
const suma = (a, b) => {
  return a + b;
};
export default getColorByPokemon;
