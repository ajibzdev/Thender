import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../GlobalStyles";
import TextTheme from "./TextTheme";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";

type IconNotificationType = {
  Icon: any;
  number?: number;
  height?: number;
  width?: number;
  bgColor?: string;
};

const IconNotification = ({
  Icon,
  number,
  height,
  width,
  bgColor,
}: IconNotificationType) => {
  return (
    <View style={styles.container}>
      <Icon />

      {/* {number && number > 0 && (
        <View
          style={[
            GlobalStyles.flexCenter,
            styles.numberContainer,
            { backgroundColor: bgColor && bgColor },
            {
              width: width ? width / 2 : 0,
              height: height ? height / 2 : 0,
              borderRadius: 100,
            },
          ]}
        >
          <TextTheme style={[Fonts.inter14, styles.text]}>
            {`${number}`}{" "}
          </TextTheme>
        </View>
      )} */}
    </View>
  );
};

export default IconNotification;

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  numberContainer: {
    position: "absolute",
    backgroundColor: Colors.refFF00,
  },
  text: {
    color: Colors.white,
  },
});
