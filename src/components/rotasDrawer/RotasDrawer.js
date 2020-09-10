import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Perfil from "../../views/Perfil/Perfil";
import Colecao from "../../views/Colecao/colecao";
import Item from "../../views/Item/Item";
import RotasPrincipalStack from "../rotasStack/RotasPrincipalStack";

const Drawer = createDrawerNavigator();

const RotasDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Inicial">
      <Drawer.Screen name="Inicial" component={RotasPrincipalStack} />
      <Drawer.Screen name="Colecao" component={Colecao} />
      <Drawer.Screen name="Item" component={Item} />
      <Drawer.Screen name="Perfil" component={Perfil} />
    </Drawer.Navigator>
  );
};

export default RotasDrawer;
