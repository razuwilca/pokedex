import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  addPokemonsFavoriteApi,
  isPokemonfavoriteApi,
} from "../../api/favorite";

const Favorite = (props) => {
  const { id } = props;
  const [isFavorite, setIsFavorite] = useState(undefined);

  const Icon = isFavorite ? FontAwesome : FontAwesome5;

  console.log("existe:", isFavorite);

  useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonfavoriteApi(id);
        setIsFavorite(response);
      } catch (error) {
        throw error;
      }
    })();
  }, [id]);

  const addFavorite = async () => {
    await addPokemonsFavoriteApi(id);
    console.log("add favorite:", id);
  };

  const removeIconFavorite = () => {
    console.log("removeFavorite");
  };
  return (
    <Icon
      name="heart"
      color="#fff"
      size={20}
      onPress={isFavorite ? removeIconFavorite : addFavorite}
      style={{ marginRight: 20 }}
    ></Icon>
  );
};

export default Favorite;
