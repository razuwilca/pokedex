import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
  const { pokemons } = props;
  console.log("props pokemosList", props);
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item}></PokemonCard>}
      contentContainerStyle={style.flatListContentContainer}
    ></FlatList>
  );
}

const style = StyleSheet.create({
  flatListContentContainer: { paddingHorizontal: 10 },
});
