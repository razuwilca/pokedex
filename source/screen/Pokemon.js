import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { getPokemonDetailsApi } from "../api/pokemon";
import Header from "../components/pokemon/Header";
import Type from "../components/pokemon/Type";
import Stats from "../components/pokemon/Stats";
import Icon from "react-native-vector-icons/FontAwesome5";

const Pokemon = (props) => {
  const {
    navigation,
    route: { params },
  } = props;

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color={"#fff"}
          size={20}
          style={{ marginLeft: 20, paddingRight: 10 }}
          onPress={navigation.goBack}
        ></Icon>
      ),
    });
  }, [navigation, params]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        //console.log("el id", response);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;

  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"]}
        type={pokemon.types[0].type.name}
      ></Header>
      <Type types={pokemon.types}></Type>
      <Stats stats={pokemon.stats}></Stats>
    </ScrollView>
  );
};

export default Pokemon;
