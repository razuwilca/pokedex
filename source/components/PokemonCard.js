import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";

const PokemonCard = (props) => {
  const { pokemon } = props;

  const goToPokemon = () => {
    console.log(`vamos al pokemon:${pokemon.name}`);
  };
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={style.card}>
        <View style={style.spacing}>
          <View style={style.bgStyle}>
            <Text style={style.name}>{pokemon.name}</Text>
            <Image source={{ uri: pokemon.imagen }} style={style.image}></Image>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const style = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyle: {
    backgroundColor: "grey",
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
});

export default PokemonCard;
