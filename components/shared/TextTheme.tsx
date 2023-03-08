import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextStyle,
} from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

const TextTheme = ({
  children,
  style,
}: {
  style?: TextStyle[];
  children:
    | string
    | string[]
    | React.ReactElement
    | React.ReactElement[]
    | number
    | number[];
}) => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <Text style={[styles.text, isDarkMode && styles.lightText, style && style]}>
      {children}
    </Text>
  );
};

export default TextTheme;

const styles = StyleSheet.create({
  text: {
    color: Colors.black,
  },
  lightText: {
    color: Colors.white,
  },
});
