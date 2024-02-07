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
    return JSON.parse(response || "[]");
    //return response?JSON.parse(response):[];
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

export async function resetFavoriteStorage() {
  try {
    await AsyncStorage.removeItem(FAVORITE_STORAGE); // Esto eliminará solo la clave específica
    console.log("Favorite Storage reseteado correctamente.");
  } catch (error) {
    console.error("Error al resetear el Favorite Storage:", error);
    throw error;
  }
}

export async function removePokemonFavoriteApi(id) {
  try {
    const favorite = await getPokemonsFavoriteApi(id);
    const newFavorites = pull(favorite, id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites));
  } catch (error) {
    throw error;
  }
}
