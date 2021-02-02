import React from "react";
import { View, Text, StyleSheet, Platform, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../helpers/colors";
import { dumyData } from "../data/data";
import Deckcards from "../components/Deckcards";
import { Mobilcontainer } from "../helpers/containers";

const DeckScreen = ({ navigation }) => {
  const GridItem = (itemData) => {
    return (
      <Deckcards
        title={itemData.item.title}
        id={itemData.item.id}
        navigation={navigation}
      />
    );
  };
  return (
    <View style={styles.screen}>
      <Mobilcontainer>
        <Ionicons
          name="ios-leaf-outline"
          size={45}
          color={Platform.OS === "ios" ? colors.iosmain : colors.androidmain}
        />
      </Mobilcontainer>
      <View>
        <Text style={styles.textStyle}>Mobil FleshCrads</Text>
      </View>

      <View style={styles.list}>
        <FlatList data={dumyData} renderItem={GridItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "PlayFair-regular",
    fontSize: 20,
    textAlign: "center",
    color: "#8f8b8b",
  },
  screen: {
    flex: 1,
  },
  mobilcard: {
    paddingVertical: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
});

export default DeckScreen;
