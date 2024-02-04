import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { useFormik } from "formik"; //para el manejo del estado del formulario
import * as Yup from "yup"; //para manejar la validacion del formulario
import { user, userDetails } from "../../utils/userDb";
import useAuthHook from "../../hooks/useAuth";

const LoginForm = () => {
  const [error, setError] = useState("");
  const { login } = useAuthHook();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false, // evita que los mensajes salgan antes de presionar el submit
    onSubmit: (formValue) => {
      //el valos nos llega del submit
      setError("");
      const { userName, passWord } = formValue;

      if (userName !== user.user || passWord !== user.password) {
        setError("El usuario o la contraseña son incorrectas");
      } else {
        login(userDetails);
        // console.log("usuario correcto");
        //console.log(userDetails);
      }
    },
  });

  return (
    <View>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        placeholder="user name"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.userName}
        onChangeText={(text) => formik.setFieldValue("userName", text)}
      ></TextInput>
      <TextInput
        placeholder="password"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.passWord}
        onChangeText={(text) => formik.setFieldValue("passWord", text)}
      ></TextInput>
      <Button title="start" onPress={formik.handleSubmit}></Button>
      <Text style={styles.error}>{formik.errors.userName}</Text>
      <Text style={styles.error}>{formik.errors.passWord}</Text>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

export default LoginForm;

function initialValues() {
  return { userName: "", passWord: "" };
}

function validationSchema() {
  return {
    userName: Yup.string().required("El usuario es obligatorio"),
    passWord: Yup.string().required("El password es obligatorio"),
  };
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 30,
  },
  error: {
    textAlign: "center",
    color: "#f00",
    marginTop: 20,
    //backgroundColor: "blue",
  },
});
