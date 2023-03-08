import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthenticatedStackParamList } from "../types";
import HomeTabs from "./HomeTabs";
import SearchScreen from "../screens/SearchScreen";

const Stack = createNativeStackNavigator<AuthenticatedStackParamList>();

const AuthenticatedStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default AuthenticatedStack;

const styles = StyleSheet.create({});
