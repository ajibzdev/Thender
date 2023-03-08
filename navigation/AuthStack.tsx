import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../types";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import SignupHeader from "../components/Header/SignupHeader";
import LoginHeader from "../components/Header/LoginHeader";
import TextTheme from "../components/shared/TextTheme";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "fade_from_bottom",
      }}
    >
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        // options={{ headerRight: () => <LoginHeader /> }}
      />

      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={
          {
            // header: () => <SignupHeader />,
          }
        }
      />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
