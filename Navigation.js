import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Navigation = () => {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Text>hello world</Text>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default Navigation;
