import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigator from "./HomeNavigator";


const DrawerNavigator = () => {
 const Drawer = createDrawerNavigator();
 return (
  <Drawer.Navigator>
   <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator}></Drawer.Screen>
    </Drawer.Navigator>
 );
};

//screens>>>Home>>>Drawer
// screens>>> Auth>>>

export default DrawerNavigator;