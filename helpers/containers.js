import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
} from "react-native";
import { Dimensions } from "react-native";
import colors from "../helpers/colors";

export const Mobilcontainer = (props) => {
  return <View style={styles.mobilcard}>{props.children}</View>;
};

export const QuizContainerHelper = ({ title, navigation }) => {
  return (
    <View style={styles.quizCont}>
      <View>
        <Text style={styles.titleText}>Your Choice: {title}</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("QuizStartScreen", { title })}
      >
        <Text style={{ fontFamily: "PlayFair-regular" }}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};
const screen = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  mobilcard: {
    paddingVertical: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  quizCont: {
    width: screen < 320 ? 280 : 320,
    backgroundColor: "#e8eded",
    height: 320,

    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.16,
    shadowOffset: { width: 0, height: 1 },
  },
  titleText: {
    fontFamily: "PlayFair-bold",
    fontSize: 20,
  },
  buttonStyle: {
    width: "40%",
    alignItems: "center",
    backgroundColor:
      Platform.OS === "ios" ? colors.iosmain : colors.androidmain,
    height: 40,
    justifyContent: "center",
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.16,
    shadowOffset: { width: 0, height: 1 },
  },
});
