import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Platform, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../helpers/colors";
import Deckcards from "../components/Deckcards";
import { Mobilcontainer } from "../helpers/containers";
import { useDispatch } from "react-redux";
import { getItems, getTimeStamp, clearAll } from "../data/asyncstorage";
import { addAllData, allResetScore } from "../actions/index";
import * as Notifications from "expo-notifications";

const DeckScreen = ({ navigation }) => {
  const [value, setValue] = useState(
    getTimeStamp().then((val) => setValue(val))
  );
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });
  const timeTriger = new Date(value) + 60 * 60 * 1000 * 24;
  Notifications.scheduleNotificationAsync({
    content: {
      title: "Look at that notification!!!!!",
      body: "You haven't completed any Quiz for the last 24 hours",
    },
    trigger: { timeTriger, repeats: true },
  });
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  useEffect(() => {
    getItems().then((val) => {
      setData(val);
      dispatch(addAllData(val));
      dispatch(allResetScore());
    }, []);
  });

  const dataInd = Object.keys(data).map((el) => data[el]);

  const GridItem = (itemData) => {
    return (
      <Deckcards
        title={itemData.item.title}
        length={itemData.item.questions.length}
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
        <Text style={styles.textStyle}>Mobil FleshCards</Text>
      </View>

      <View style={styles.list}>
        <FlatList
          data={dataInd}
          renderItem={GridItem}
          keyExtractor={(item, index) => item.id.toString()}
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
