import React from "react";
import estiloRotasStack from "./estiloRotasStack";
import { createStackNavigator } from "@react-navigation/stack";
import Inicial from "../../views/Inicial/inicial";
import Colecao from "../../views/Colecao/colecao";
import Item from "../../views/Item/Item";

const Stack = createStackNavigator();

const RotasPrincipalStack = () => {
  return (
    <Stack.Navigator initialRouteName="Inicial">
      <Stack.Screen
        name="Inicial"
        component={Inicial}
        options={{
          cardStyle: estiloRotasStack.screenInicial,
          headerStyle: { backgroundColor: "#14417b" },
          headerTintColor: "#FFFFFF",
        }}
      />
      <Stack.Screen
        name="Colecao"
        component={Colecao}
        options={{
          cardStyle: estiloRotasStack.screenColecao,
          headerStyle: { backgroundColor: "#14417b" },
          headerTintColor: "#FFFFFF",
        }}
      />
      <Stack.Screen
        name="Item"
        component={Item}
        options={{
          cardStyle: estiloRotasStack.screenItem,
          headerStyle: { backgroundColor: "#14417b" },
          headerTintColor: "#FFFFFF",
        }}
      />
    </Stack.Navigator>
  );
};

export default RotasPrincipalStack;
