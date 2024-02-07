import { View, Text, StyleSheet, Button } from "react-native";
import React, { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { size } from "lodash";
import useAuth from "../../hooks/useAuth";
import { getPokemonsFavoriteApi } from "../../api/favorite";

const UserData = () => {
  const { auth, logout } = useAuth();
  const [total, setTotal] = useState(0);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const response = await getPokemonsFavoriteApi();
          setTotal(size(response));
        } catch (error) {
          setTotal(0);
        }
      })();
    }, [])
  );

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.title}>{`${auth.firstName} ${auth.lastName}`}</Text>
      </View>

      <View style={styles.dataContent}>
        <ItemMenu
          title="Nombre"
          text={`${auth.firstName} ${auth.lastName}`}
        ></ItemMenu>
        <ItemMenu title="UserName" text={auth.userName}></ItemMenu>
        <ItemMenu title="Email" text={auth.email}></ItemMenu>
        <ItemMenu title="Total Favoritos" text={`${total} pokemons`}></ItemMenu>
      </View>
      <Button
        title="Desconectarse"
        onPress={logout}
        style={styles.btnLogout}
      ></Button>
    </View>
  );
};

function ItemMenu(props) {
  const { title, text } = props;

  return (
    <View style={styles.ItemMenu}>
      <Text style={styles.ItemMenuTitle}>{title}</Text>
      <Text>{text}</Text>
    </View>
  );
}

export default UserData;

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
    marginBottom: 40,
  },
  ItemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#cfcfcf",
  },
  ItemMenuTitle: {
    fontWeight: "bold",
    paddingRight: 10,
    width: 120,
  },
  btnLogout: {
    paddingTop: 50,
  },
});
