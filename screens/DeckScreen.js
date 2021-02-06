import React, { useEffect } from "react";
import { View, Text, StyleSheet, Platform, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../helpers/colors";
import { dumyData } from "../data/data";
import Deckcards from "../components/Deckcards";
import { Mobilcontainer } from "../helpers/containers";
import { useDispatch, useSelector } from "react-redux";
import { addAllData } from "../actions/index";
import { DataObj } from "../data/data";

const DeckScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addAllData(DataObj));
  }, [dispatch]);
  const dataInd = useSelector((state) =>
    Object.keys(state).map((el) => state[el])
  );

  const GridItem = (itemData) => {
    return (
      <Deckcards
        title={itemData.item.title}
        length={itemData.item.questions.length}
        navigation={navigation}
      />
    );
  };
  const state = useSelector((state) => state.title);

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
        <FlatList
          data={dataInd}
          renderItem={GridItem}
          keyExtractor={(item, index) => item.index}
        />
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
