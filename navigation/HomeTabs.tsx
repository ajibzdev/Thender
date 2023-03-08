import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootTabParamList, RootTabScreenProps } from "../types";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import Fonts from "../constants/Fonts";
import PeersScreen from "../screens/PeersScreen";

// Svg
import PeersIcon from "../assets/icons/PeersIcon.svg";
import PeersPrimaryIcon from "../assets/icons/PeersPrimaryIcon.svg";
import IconNotification from "../components/shared/IconNotification";
import ProgressScreen from "../screens/ProgressScreen";
import RequestsScreen from "./RequestsScreen";
import MainHeader from "../components/Header/MainHeader";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function HomeTabs() {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        header: () => <MainHeader />,
      }}
    >
      <BottomTab.Screen
        name="PeersScreen"
        component={PeersScreen}
        options={({}) => {
          return {
            tabBarIcon: ({ focused, size }) => {
              if (focused) {
                return <PeersPrimaryIcon height={size} width={size} />;
              }
              return (
                <PeersIcon height={size} width={size} color={Colors.black} />
              );
            },
            tabBarLabel: ({ focused }) => {
              return (
                <Text
                  style={[
                    Fonts.interSemiBold,
                    {
                      fontSize: 14,
                      lineHeight: 15,
                      color: focused ? Colors.primary : Colors.grey6C6C,
                    },
                  ]}
                >
                  Peers
                </Text>
              );
            },
            tabBarLabelStyle: { color: Colors.primary },
          };
        }}
      />
      <BottomTab.Screen
        name="ProgressScreen"
        component={ProgressScreen}
        options={({}) => {
          return {
            tabBarIcon: ({ focused, size }) => (
              <MaterialCommunityIcons
                name={"progress-download"}
                size={size}
                color={focused ? Colors.primary : Colors.grey4E4E}
              />
            ),
            tabBarLabel: ({ focused }) => {
              return (
                <Text
                  style={[
                    Fonts.interSemiBold,
                    {
                      fontSize: 14,
                      lineHeight: 15,
                      color: focused ? Colors.primary : Colors.grey6C6C,
                    },
                  ]}
                >
                  Peers
                </Text>
              );
            },
            tabBarLabelStyle: { color: Colors.primary },
          };
        }}
      />
      <BottomTab.Screen
        name="RequestsScreen"
        component={RequestsScreen}
        options={({}) => {
          return {
            tabBarIcon: ({ focused, size }) => (
              <Feather
                name={"send"}
                size={size}
                color={focused ? Colors.primary : Colors.grey4E4E}
              />
            ),
            tabBarLabel: ({ focused }) => {
              return (
                <Text
                  style={[
                    Fonts.interSemiBold,
                    {
                      fontSize: 14,
                      lineHeight: 15,
                      color: focused ? Colors.primary : Colors.grey6C6C,
                    },
                  ]}
                >
                  Request
                </Text>
              );
            },
            tabBarLabelStyle: { color: Colors.primary },
          };
        }}
      />
    </BottomTab.Navigator>
  );
}

export default HomeTabs;

const styles = StyleSheet.create({});

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
