import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { capitalize } from "lodash";
import getColorByPokemon from "../utils/getColorByPokemontype";

const PokemonCard = (props) => {
  const { pokemon } = props;
  const navigation = useNavigation();

  const pokemonColor = getColorByPokemon(pokemon.type);
  const bgStyles = { backgroundColor: pokemonColor, ...style.bgStyles };

  const goToPokemon = () => {
    navigation.navigate("Pokemon", { id: pokemon.id });
  };
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={style.card}>
        <View style={style.spacing}>
          <View style={bgStyles}>
            <Text style={style.number}>
              #{`${pokemon.order}`.padStart(3, 0)}
            </Text>
            <Text style={style.name}>{capitalize(pokemon.name)}</Text>
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

  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    fontSize: 11,
    color: "#fff",
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
});

export default PokemonCard;
