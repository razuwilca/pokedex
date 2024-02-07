import { StyleSheet, Button, View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const NoLogged = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.content}>
      <Text style={styles.text}>
        Para ver esta pantalla tienes que iniciar sesión
      </Text>
      <Button
        title="Ir al login"
        onPress={() => navigation.navigate("AccountNavigation")}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  content: { marginVertical: 50, paddingHorizontal: 50 },
  text: { textAlign: "center", marginBottom: 10 },
});

export default NoLogged;
