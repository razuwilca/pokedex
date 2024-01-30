import { Text, StyleSheet, ActivityIndicator, Platform } from "react-native";
import React, { memo } from "react";
import { FlatList, VirtualizedList } from "react-native";
import PokemonCard from "./PokemonCard";

function PokemonList(props) {
  const { pokemons, loadPokemons, isNext } = props;
  //console.log("props pokemosList", props);
  const loadMore = () => {
    loadPokemons();
  };
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      /*windowSize={40}*/
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item}></PokemonCard>}
      contentContainerStyle={style.flatListContentContainer}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator
            size={"large"}
            style={style.spinner}
            color={"#AEAEAE"}
          ></ActivityIndicator>
        )
      }
    ></FlatList>
  );
}

const style = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 10,
    marginTop: Platform.OS === "android" ? 20 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 90,
  },
});

export default memo(PokemonList);
