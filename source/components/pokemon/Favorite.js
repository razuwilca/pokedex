import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  addPokemonsFavoriteApi,
  isPokemonfavoriteApi,
  removePokemonFavoriteApi,
} from "../../api/favorite";

const Favorite = (props) => {
  const { id } = props;
  const [isFavorite, setIsFavorite] = useState(undefined);
  const [reloadCheck, setReloadCheck] = useState(false); //interruptor

  const Icon = isFavorite ? FontAwesome : FontAwesome5;

  console.log("existe:", isFavorite);

  useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonfavoriteApi(id);
        setIsFavorite(response);
      } catch (error) {
        setIsFavorite(false);
      }
    })();
  }, [id, reloadCheck]);

  const addFavorite = async () => {
    try {
      await addPokemonsFavoriteApi(id);
      onReloadCheckFavorite();
      console.log("add favorite:", id);
    } catch (error) {
      console.log(error);
    }
  };

  const removeFavorite = async () => {
    try {
      await removePokemonFavoriteApi(id);
      onReloadCheckFavorite();
    } catch (error) {
      console.log(error);
    }
    console.log("removeFavorite");
  };

  const onReloadCheckFavorite = () => {
    setReloadCheck((prev) => !prev);
  };
  return (
    <Icon
      name="heart"
      color="#fff"
      size={20}
      onPress={isFavorite ? removeFavorite : addFavorite}
      style={{ marginRight: 20 }}
    ></Icon>
  );
};

export default Favorite;
