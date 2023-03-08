import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";

const isDarkMode = () => {
  return useColorScheme() == "dark" ? true : false;
};

export default isDarkMode;

const styles = StyleSheet.create({});
