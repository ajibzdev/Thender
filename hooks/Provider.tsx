import { StyleSheet, Text, View } from "react-native";
import React from "react";

import AuthContextProvider from "../store/auth-context";
import UserContextProvider from "../store/user-context";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthContextProvider>
      <UserContextProvider>{children}</UserContextProvider>
    </AuthContextProvider>
  );
};

export default Provider;

const styles = StyleSheet.create({});
