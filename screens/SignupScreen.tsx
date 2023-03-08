import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GlobalStyles from "../GlobalStyles";
import Icon from "../assets/icons/LoginIcon.svg";
import Fonts from "../constants/Fonts";
import AuthInput from "../components/shared/AuthInput";
import Tag from "../assets/icons/TagIcon.svg";
import EmailIcon from "../assets/icons/EmailIcon.svg";
import PasswordIcon from "../assets/icons/PasswordIcon.svg";
import TextTheme from "../components/shared/TextTheme";
import isDarkMode from "../hooks/isDarkMode";
import Colors from "../constants/Colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Sizes from "../constants/Sizes";
import FullWidthButton from "../components/shared/FullWidthButton";
import { postToEndpoint } from "../api/responseHandler";
import API from "../api/API";
import { ScreenNavigationType } from "../types";

const SignupScreen: React.FC<ScreenNavigationType> = ({
  navigation,
  route,
}) => {
  // State
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [password, setPassword] = React.useState("");

  // Boolean
  const [loading, setLoading] = React.useState<boolean>(false);

  // Submit
  const handleSubmit = async () => {
    setLoading(() => true);

    const reqData = {
      username: username.trim().toLowerCase(),
      email: email.trim().toLowerCase(),
      first_name: firstName,
      last_name: lastName,
      password,
    };

    try {
      const res = await postToEndpoint(API.register, reqData);
      console.log(res);
      if (!res) {
        Alert.alert("Error", "email/username already exist", [
          { text: "Okay" },
        ]);
      } else {
        Alert.alert("Success", "User has been registered. Please login", [
          {
            text: "Okay",
            onPress: () => {
              navigation.navigate("LoginScreen");
            },
          },
        ]);
      }
    } catch (err) {
      console.log(err);
    }

    setLoading(() => false);
  };

  return (
    <SafeAreaView
      style={[GlobalStyles.root, GlobalStyles.paddingHorizontalLarge]}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <KeyboardAwareScrollView
          contentContainerStyle={[GlobalStyles.alignCenter]}
          style={[GlobalStyles.flex1]}
        >
          <Icon width={500} height={200} />
          <View style={[{ alignSelf: "flex-start" }]}>
            <TextTheme style={[Fonts.interSemiBold]}>Sign Up</TextTheme>
          </View>

          <AuthInput
            icon={<View />}
            onChangeText={setUsername}
            value={username}
            placeholder={"Username"}
          />

          <AuthInput
            icon={<View />}
            onChangeText={setFirstName}
            value={firstName}
            placeholder={"First Name"}
          />
          <AuthInput
            icon={<View />}
            onChangeText={setLastName}
            value={lastName}
            placeholder={"Last Name"}
          />
          <AuthInput
            icon={<View />}
            onChangeText={setEmail}
            value={email}
            placeholder={"Email"}
          />
          <AuthInput
            icon={<View />}
            onChangeText={setPassword}
            value={password}
            placeholder={"Password"}
            password={true}
          />

          <View style={{ marginTop: Sizes.large }} />
          <FullWidthButton
            loading={loading}
            label="Continue"
            onPress={handleSubmit}
            disabled={
              firstName == "" || lastName == "" || email == "" || password == ""
            }
          />

          <View style={{ marginTop: 8 }} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LoginScreen");
            }}
          >
            <Text
              style={[{ color: isDarkMode() ? Colors.white : Colors.black }]}
            >
              Already have an account ?
              <TextTheme style={[GlobalStyles.textColorPrimary]}>
                Sign in{" "}
              </TextTheme>
            </Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
