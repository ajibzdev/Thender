import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardTypeOptions,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import React from "react";
import GlobalStyles from "../../GlobalStyles";
import Sizes from "../../constants/Sizes";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";
import TextTheme from "./TextTheme";

type AuthInputProps = {
  icon: any;
  value: string;
  onChangeText: any;
  width?: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  password?: boolean;
};

const AuthInput: React.FC<AuthInputProps> = ({
  icon,
  value,
  onChangeText,
  placeholder,
  width,
  keyboardType,
  password,
}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const isDarkMode = useColorScheme() === "dark";

  return (
    <View style={[GlobalStyles.flexRow, GlobalStyles.marginVerticalMedium]}>
      <View style={[]}>{icon}</View>

      <View
        style={[
          GlobalStyles.flexRow,
          styles.inputContainer,
          isDarkMode && { borderBottomColor: Colors.white, borderWidth: 1 },
        ]}
      >
        <TextInput
          style={[
            Fonts.interNormal,
            styles.text,
            isDarkMode && GlobalStyles.textColorWhite,
          ]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={isDarkMode ? Colors.grey7D7D : "#7D7D7D"}
          keyboardType={keyboardType}
          secureTextEntry={password && hidePassword ? true : false}
        />

        {password && (
          <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
            <TextTheme style={[styles.textPassword]}>
              {!hidePassword ? "Hide" : "Show"}
            </TextTheme>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default AuthInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    height: 55,
    marginLeft: 12,
    paddingHorizontal: Sizes.medium,
    borderBottomWidth: 0.8,
    borderBottomColor: Colors.black,
    paddingVertical: Sizes.large,
  },
  text: {
    flex: 1,
    fontSize: Sizes.large,
    color: Colors.black,
  },
  textPassword: {},
});
