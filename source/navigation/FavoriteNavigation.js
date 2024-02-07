import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Favorite from "../screen/Favorite";
import PokemonScreen from "../screen/Pokemon"; //para la navegacion hacia atras en favorito

const Stack = createNativeStackNavigator();
const FavoriteNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={Favorite}
        options={{ headerShown: true, headerTitle: "Favoritos" }}
      ></Stack.Screen>

      <Stack.Screen
        name="Pokemon" //se coloca el mismo nombre
        component={PokemonScreen}
        options={{ title: "DetailPokemon", headerTransparent: true }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default FavoriteNavigation;
