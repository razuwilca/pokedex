import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import pokedexScreen from "../screen/Pokedex";
import PokemonScreen from "../screen/Pokemon";

const Stack = createNativeStackNavigator();
const PokedexNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pokedex" component={pokedexScreen}></Stack.Screen>
      <Stack.Screen name="Pokemon" component={PokemonScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default PokedexNavigation;
