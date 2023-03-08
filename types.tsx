/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  HomeScreen: undefined;
  PeersScreen: undefined;
  ProgressScreen: undefined;
  RequestsScreen: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type AuthStackParamList = {
  LoginScreen: undefined;
  SignupScreen: undefined;
};
export type AuthenticatedStackParamList = {
  Home: NavigatorScreenParams<RootTabParamList> | undefined;
  SearchScreen: undefined;
};

export type ScreenNavigationType = {
  navigation?: any;
  route?: any;
};

export type UserType = {
  email: string;
  firstName: string;
  lastName: string;
  expoPushT: string;
};
