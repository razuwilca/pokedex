import React from "react";
import { Text, View } from "react-native";
import LoginForm from "../components/auth/LoginForm";
import UserData from "../components/auth/UserData";
import useAuth from "../hooks/useAuth";

const Account = (props) => {
  const { auth } = useAuth();
  console.log("useAtttt: ", auth);

  return <View>{auth ? <UserData></UserData> : <LoginForm></LoginForm>}</View>;
};

export default Account;
