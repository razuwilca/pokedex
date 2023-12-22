import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PokedexScreen from "../screen/Pokedex";
import FavoriteNavigation from "./FavoriteNavigation";
import AccountScreen from "../screen/Account";
import Icon from "react-native-vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="FavoriteStack"
        component={FavoriteNavigation}
        options={{
          tabBarLabel: "Favoritos",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size}></Icon>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{ tabBarLabel: "", tabBarIcon: () => renderPokeball() }}
      ></Tab.Screen>
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: "Mi Cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size}></Icon>
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};
export default Navigation;

function renderPokeball() {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{ width: 75, height: 75, top: -15 }}
    ></Image>
  );
}
