import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GlobalStyles from "../../GlobalStyles";
import TextTheme from "../shared/TextTheme";
import Fonts from "../../constants/Fonts";
import { Feather, Entypo } from "@expo/vector-icons";
import isDarkMode from "../../hooks/isDarkMode";
import Colors from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
const MainHeader = () => {
  // navigation
  const navigation = useNavigation();

  // Function
  const handleSearch = () => {
    // @ts-ignore
    navigation.navigate("SearchScreen");
  };
  const handlePress = () => {};

  return (
    <SafeAreaView
      edges={["top"]}
      style={[
        GlobalStyles.backgroundColorPrimary,
        GlobalStyles.paddingHorizontalLarge,
        GlobalStyles.justifySpaceBetween,
        GlobalStyles.flexRow,
        styles.container,
      ]}
    >
      <TextTheme style={[Fonts.interBold, GlobalStyles.flex1]}>
        Thender
      </TextTheme>
      <View style={[GlobalStyles.flexRow]}>
        <TouchableOpacity onPress={handleSearch}>
          <Feather
            name="search"
            color={isDarkMode() ? Colors.white : Colors.black}
            size={22}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePress} style={{ marginLeft: 12 }}>
          <Entypo
            name="dots-three-vertical"
            color={isDarkMode() ? Colors.white : Colors.black}
            size={22}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 16,
  },
});
