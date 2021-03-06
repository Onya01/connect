import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CONTACT_DETAIL, CONTACT_LIST, SETTINGS, CREATE_CONTACT } from "../constants/routeNames";
import Settings from '../screens/Settings';
import CreateContact from "../screens/CreateContacts";
import Contacts from "../screens/Contacts";
import ContactDetail from "../screens/ContactDetail";

const HomeNavigator = () => {
 const HomeStack = createNativeStackNavigator();
 return (
  <HomeStack.Navigator initialRouteName ={CONTACT_LIST}>
   <HomeStack.Screen name={CONTACT_LIST} component={Contacts}></HomeStack.Screen>
   <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetail}></HomeStack.Screen>
   <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact}></HomeStack.Screen>
   <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>
    </HomeStack.Navigator>
 );
};

export default HomeNavigator;