import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../GlobalStyles";

// Svgs
import WifiDisabled from "../../assets/icons/WifiDisabledIcon.svg";
import ActionButton from "../shared/ActionButton";
import Colors from "../../constants/Colors";
import isDarkMode from "../../hooks/isDarkMode";
import TextTheme from "../shared/TextTheme";
import { SafeAreaView } from "react-native-safe-area-context";

const SignupHeader = () => {
  return (
    <SafeAreaView style={[{ paddingTop: 24, height: 70 }]}>
      <WifiDisabled height={30} width={30} />
      <View style={{ marginLeft: 8 }} />
      <ActionButton
        style={{ alignSelf: "flex-start" }}
        label={"Login"}
        onPress={() => {}}
        backgroundColor={isDarkMode() ? Colors.white : Colors.black}
        active={true}
      />
    </SafeAreaView>
  );
};

export default SignupHeader;

const styles = StyleSheet.create({});
