import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AccountScreen from "../screen/Account";

const Stack = createNativeStackNavigator();
const AccountNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{ title: "Mi cuenta" }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AccountNavigation;
