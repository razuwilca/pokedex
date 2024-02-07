import React, { useState, useEffect, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text, View } from "react-native";
import { getPokemonsFavoriteApi } from "../api/favorite";
import useAuth from "../hooks/useAuth";
import { getPokemonDetailsApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList"; //reutilizamos el componente pokemonlist
import { useFocusEffect } from "@react-navigation/native";
import NoLogged from "../components/NoLogged";

//usamos useFocusEffect y useCallback para ejecutar la patecion cada vez que se entre en la vista
const Favorite = () => {
  /*const checkStorage = async () => {
    const response = await getPokemonsFavoriteApi();
    console.log("local storage: ", response);
  };

  const checkReset = async () => {
    const response = await resetFavoriteStorage();
    console.log("reset storage: ", response);
  };*/

  const [pokemons, setPokemons] = useState([]);
  const { auth } = useAuth();

  console.log("pokemonsssss:", pokemons);

  useFocusEffect(
    //se ejecuta solo cuando la pantalla esta enfocada y limpia el efecto cuando no esta enfocada
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonsFavoriteApi();

          const pokemonsArray = [];

          for (const id of response) {
            const responseResults = await getPokemonDetailsApi(id);

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
          setPokemons(pokemonsArray);
          console.log("favoriteeeee:", response);
        })();
      }
    }, [auth])
  );

  return !auth ? (
    <NoLogged></NoLogged>
  ) : (
    <PokemonList pokemons={pokemons}></PokemonList>
  );
};

export default Favorite;
