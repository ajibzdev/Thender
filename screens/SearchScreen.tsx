import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Sizes from "../constants/Sizes";
import Fonts from "../constants/Fonts";
import GlobalStyles from "../GlobalStyles";
import FullTextInput from "../components/shared/FullTextInput";
import TextTheme from "../components/shared/TextTheme";
import { getEndpoint } from "../api/responseHandler";
import API from "../api/API";
import { KeyboardAwareFlatList } from "react-native-keyboard-aware-scroll-view";
import Card from "../components/Card/Card";
const SearchScreen = () => {
  // States
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const [result, setResult] = React.useState<any>([]);

  // funcitons
  const onRefresh = async () => {};

  const handleSearch = async (text: string) => {
    if (text !== "") {
      try {
        const res = await getEndpoint(`${API.search}?q=${text}`);

        setResult(() => res.results);
      } catch (err: any) {
        console.log(err);
      }
    }
  };

  return (
    <SafeAreaView style={[GlobalStyles.paddingHorizontalLarge]}>
      <View style={{ marginTop: 8 }} />
      <TextTheme style={[Fonts.interH1]}>Search</TextTheme>

      <View
        style={[
          GlobalStyles.flexRow,
          GlobalStyles.alignCenter,
          styles.searchContainer,
        ]}
      >
        <View style={[GlobalStyles.flex1]}>
          <FullTextInput
            value={searchQuery}
            onChangeText={(text: string) => {
              setSearchQuery(() => text);
              handleSearch(text);
            }}
            placeholder={"Search Thender"}
          />
        </View>

        {searchQuery !== "" && (
          <TouchableOpacity
            onPress={() => {
              setSearchQuery("");
            }}
          >
            <TextTheme
              style={[
                Fonts.inter14,
                GlobalStyles.textColorPrimary,
                GlobalStyles.marginHorizontallMedium,
              ]}
            >
              Cancel
            </TextTheme>
          </TouchableOpacity>
        )}
      </View>
      {result.length > 0 && (
        <KeyboardAwareFlatList
          data={result}
          renderItem={({ item }: any) => {
            console.log(item);
            return (
              <Card
                name={item?.username}
                id={item?.id}
                picture={item?.profile_picture}
                type={"peer"}
              />
            );
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: Sizes.medium,
    marginBottom: 20,
  },
});
