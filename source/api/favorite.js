import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
import { FAVORITE_STORAGE } from "../utils/constants";

export async function addPokemonsFavoriteApi(id) {
  try {
    const favorite = await getPokemonsFavoriteApi();
    favorite.push(id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorite));
  } catch (error) {
    throw error;
  }
}

export async function getPokemonsFavoriteApi() {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
    return JSON.parse(response || []);
  } catch (error) {
    throw error;
  }
}

export async function isPokemonfavoriteApi(id) {
  try {
    const response = await getPokemonsFavoriteApi(id);
    return includes(response, id);
  } catch (error) {
    throw error;
  }
}
