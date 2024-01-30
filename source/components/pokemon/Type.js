import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { map, capitalize } from "lodash";
import getColorByPokemon from "../../utils/getColorByPokemontype";

const Type = (props) => {
  const { types } = props;

  return (
    <View style={style.content}>
      {map(types, (item, index) => (
        <View
          key={index}
          style={{
            ...style.pill,
            backgroundColor: getColorByPokemon(item.type.name),
          }}
        >
          <Text>{capitalize(item.type.name)}</Text>
        </View>
      ))}
    </View>
  );
};

export default Type;

const style = StyleSheet.create({
  content: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
});
