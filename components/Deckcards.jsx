import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import colors from "../helpers/colors";
const Deckcards = ({ title, id, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("QuizScreen", { title })}
    >
      <View style={styles.items}>
        <View style={styles.iconLeft}>
          <Ionicons
            name="ios-leaf-outline"
            size={30}
            color={Platform.OS === "ios" ? colors.iosmain : colors.androidmain}
          />
        </View>
        <View style={styles.cont}>
          <Text style={styles.textStyle}>{title}</Text>
        </View>
        <View style={styles.iconRight}>
          <Text style={styles.textRight}>{id}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const screen = Dimensions.get("screen").width;
const styles = StyleSheet.create({
  iconLeft: {
    justifyContent: "flex-start",
    flexDirection: "row",
    width: "20%",
  },
  iconRight: {
    width: 35,
    height: 35,
    borderRadius: 17,
    backgroundColor:
      Platform.OS === "ios" ? colors.iosmain : colors.androidmain,

    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.36,
    shadowOffset: { width: 0, height: 1 },
  },
  textRight: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingVertical: 5,
    fontSize: 18,
    fontFamily: "PlayFair-bold",
  },

  cont: {
    width: "60%",
  },
  items: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    height: 70,
    width: screen < 350 ? 280 : 320,
    margin: 15,
    overflow:
      Platform.OS === "android" && Platform.version >= 21
        ? "hidden"
        : "visible",
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.36,
    shadowOffset: { width: 0, height: 1 },
    backgroundColor: "#e8e2e1",
  },
  textStyle: {
    fontFamily: "PlayFair-bold",
    fontSize: 20,
    textAlign: "left",
    color: "#8f8b8b",
  },
});
export default Deckcards;
