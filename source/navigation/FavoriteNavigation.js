import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Favorite from "../screen/Favorite";

const Stack = createNativeStackNavigator();
const FavoriteNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={Favorite}
        options={{ headerShown: true, headerTitle: "favoritos" }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default FavoriteNavigation;
