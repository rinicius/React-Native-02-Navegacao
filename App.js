import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import "react-native-gesture-handler";
import RotasLoginStack from "./src/components/rotasStack/RotasLoginStack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#081a31" />
      <RotasLoginStack />
    </NavigationContainer>
  );
}
