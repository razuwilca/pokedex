import "react-native-gesture-handler";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./source/navigation/Navigation";

export default function App() {
  console.log("estamos en react native");
  return (
    <NavigationContainer>
      <Navigation></Navigation>
    </NavigationContainer>
  );
}
