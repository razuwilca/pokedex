import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  console.log("pokemon --->", pokemons);
  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi();
      const pokemonsArray = await Promise.all(
        response.results.map(async (item) => {
          const responseResults = await getPokemonDetailsByUrlApi(item.url);

          const pokemonDetail = {
            id: responseResults.id,
            name: responseResults.name,
            type: responseResults.types[0].type.name,
            order: responseResults.order,
            imagen:
              responseResults.sprites.other["official-artwork"].front_default,
          };

          return pokemonDetail;
        })
      );

      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <PokemonList pokemons={pokemons}></PokemonList>
    </View>
  );
};

export default Pokedex;
