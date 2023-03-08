import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../GlobalStyles";
import ProfilePicture from "../shared/ProfilePicture";
import TextTheme from "../shared/TextTheme";
import { capitalizeSentence } from "../../utils/utilityFunctions";
import Fonts from "../../constants/Fonts";
import ActionButton from "../shared/ActionButton";
import Colors from "../../constants/Colors";
import { postToEndpoint } from "../../api/responseHandler";
import API from "../../api/API";

type CardType = {
  picture: string;
  name: string;
  type?: string;
  id: string;
};
const Card = ({ id, name, picture, type }: CardType) => {
  const handlePress = () => {
    type == "peer" &&
      (async () => {
        // Make Peer Request
        const reqData = {
          user_id: id,
        };

        console.log(reqData);

        try {
          const res = await postToEndpoint(API.peer, reqData);
          if (res) {
            alert("Added");
          } else {
            alert("Error while trying to add user");
          }
          console.log(res);
        } catch (err) {
          console.log(err);
        }
      })();
  };
  return (
    <View
      style={[
        GlobalStyles.paddingVerticalMedium,
        GlobalStyles.paddingHorizontalLarge,
        GlobalStyles.flexRow,
        GlobalStyles.justifySpaceBetween,
        styles.container,
      ]}
    >
      <View style={[GlobalStyles.flex1, GlobalStyles.flexRow]}>
        <ProfilePicture uri={picture} width={60} />
        <View style={{ marginLeft: 12 }} />
        <TextTheme style={[Fonts.interNormal]}>
          {/* {capitalizeSentence(name)} */}
          {name}
        </TextTheme>
      </View>
      <View>
        <ActionButton
          onPress={handlePress}
          active={true}
          label={type == "peer" ? "Add" : "Send"}
          backgroundColor={Colors.primary}
          style={{ alignSelf: "flex-end" }}
        ></ActionButton>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.grey6C6C,
  },
});
