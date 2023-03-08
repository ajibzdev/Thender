import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../GlobalStyles";
import NoPeers from "../assets/icons/NoPeersIcon.svg";
import TextTheme from "../components/shared/TextTheme";
import Fonts from "../constants/Fonts";
import Colors from "../constants/Colors";
import { getEndpoint } from "../api/responseHandler";
import API from "../api/API";

const PeersScreen = () => {
  // State
  const [peers, setPeers] = React.useState([]);

  // Booleans
  const [loading, setLoading] = React.useState<boolean>(false);

  // Use Effects
  React.useLayoutEffect(() => {
    const getPeers = async () => {
      const res = await getEndpoint(API.allPeer);
      console.log(res);
      if (!res) {
        setPeers([]);
      } else {
        setPeers(() => res?.results);
      }
    };
    getPeers();
  }, []);

  return (
    <View style={[GlobalStyles.root]}>
      {peers.length == 0 && (
        <View
          style={[
            GlobalStyles.flex1,
            GlobalStyles.alignCenter,
            GlobalStyles.paddingHorizontalLarge,
          ]}
        >
          {/* <View style={{ marginTop: 24 }} /> */}
          <NoPeers height={400} width={400} />
          <View style={{ marginTop: 8 }} />
          <TextTheme style={[Fonts.interH1, { color: Colors.grey4E4E }]}>
            No Peers !!!
          </TextTheme>
          <View style={{ marginTop: 8 }} />
          <TextTheme
            style={[
              Fonts.interNormal,
              GlobalStyles.textAlignCenter,
              { fontSize: 14 },
            ]}
          >
            We couldnt find anybody to peer with on your current network.
          </TextTheme>
        </View>
      )}
    </View>
  );
};

export default PeersScreen;

const styles = StyleSheet.create({});
