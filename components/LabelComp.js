import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import colors from "../helpers/colors";

const LabelComp = ({ inputname }) => {
  return (
    <View style={styles.cont}>
      <Text style={styles.text}>Add Your {inputname}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: "#e8e2e1",
    width: "100%",
    height: 25,
    justifyContent: "flex-start",
    alignItems: "baseline",
    marginVertical: 15,
  },
  text: {
    fontSize: 17,
    overflow: "hidden",
    fontFamily: "PlayFair-bold",
    textAlign: "center",
    color: Platform.OS === "ios" ? colors.iosmain : colors.androidmain,
  },
});
export default LabelComp;
