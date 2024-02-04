import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text, View } from "react-native";
import { getPokemonsFavoriteApi } from "../api/favorite";

const Favorite = () => {
  const checkStorage = async () => {
    const response = await getPokemonsFavoriteApi();
    console.log("local storage: ", response);
  };
  return (
    <SafeAreaView>
      <Text>Favorite</Text>
      <Button title="Obtener async storage " onPress={checkStorage}></Button>
    </SafeAreaView>
  );
};

export default Favorite;
