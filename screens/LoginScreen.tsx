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
import axios from "axios";
import { AuthContext } from "../store/auth-context";

const LoginScreen: React.FC<ScreenNavigationType> = ({ navigation }) => {
  // Context
  const authCtx = React.useContext(AuthContext);

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
      username: email.trim().toLowerCase(),
      password,
    };

    try {
      axios.defaults.headers.common.Authorization = ``;

      const res = await postToEndpoint(API.login, reqData);
      console.log(res);
      if (!res) {
        Alert.alert("Error", "email/password is invalid", [{ text: "Okay" }]);
      } else {
        axios.defaults.headers.common.Authorization = `Bearer ${res?.access}`;

        authCtx.authenticate(res?.access);
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
            <TextTheme style={[Fonts.interSemiBold]}>Login</TextTheme>
          </View>

          <AuthInput
            icon={<View />}
            onChangeText={setEmail}
            value={email}
            placeholder={"Username"}
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
            disabled={email == "" || password == ""}
          />

          <View style={{ marginTop: 8 }} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignupScreen");
            }}
          >
            <Text
              style={[{ color: isDarkMode() ? Colors.white : Colors.black }]}
            >
              Dont have an account ?{" "}
              <TextTheme style={[GlobalStyles.textColorPrimary]}>
                Sign up{" "}
              </TextTheme>
            </Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
