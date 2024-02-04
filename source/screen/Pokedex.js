import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

const Pokedex = () => {
  /*const [pokemons, setPokemons] = useState([]);
  const [nextUlr, setNextUrl] = useState(null);

  console.log("volvio a recargarse --->");
  useEffect(() => {
    (async () => {
      await loadPokemons();
      console.log("paso por el useEffect");
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi(nextUlr);
      //console.log("response: ", response);
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

      setNextUrl(response.next);
    } catch (error) {
      console.error(error);
    }
  };*/

  const [pokemons, setPokemons] = useState([]);
  const [nextUlr, setNextUrl] = useState(null);

  //console.log("volvio a recargarse --->");
  useEffect(() => {
    (async () => {
      await loadPokemons();
      //console.log("paso por el useEffect");
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi(nextUlr);

      const pokemonsArray = [];

      for (const item of response.results) {
        const responseResults = await getPokemonDetailsByUrlApi(item.url);

        const pokemonDetail = {
          id: responseResults.id,
          name: responseResults.name,
          type: await responseResults.types[0].type.name,
          order: responseResults.order,
          imagen: await responseResults.sprites.other["official-artwork"]
            .front_default,
        };

        pokemonsArray.push(pokemonDetail);
      }

      setPokemons([...pokemons, ...pokemonsArray]);
      setNextUrl(response.next);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        isNext={nextUlr}
      ></PokemonList>
    </View>
  );
};

export default Pokedex;
