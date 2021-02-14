import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { Mobilcontainer } from "../helpers/containers";
import { Ionicons } from "@expo/vector-icons";
import colors from "../helpers/colors";

const GoAgainScreen = (props) => {
  const [seconds, setSeconds] = useState(0);
  const title = props.route.params.title;
  const textArray = ["Are Your Ready?", "Get Ready!", "Here We Go..."];
  const stop = 3;
  const runOnce = () => {
    const t = setTimeout(() => {
      setSeconds(seconds + 1);
    }, 800);
    if (seconds === stop) {
      props.navigation.navigate("QuizStartScreen", { title: title });
      return clearTimeout(t);
    }
  };
  useEffect(() => {
    runOnce();
  }, [seconds]);
  return (
    <View style={styles.screen}>
      <Mobilcontainer>
        <Ionicons
          name="logo-react"
          size={65}
          color={Platform.OS === "ios" ? colors.iosmain : colors.androidmain}
        />
      </Mobilcontainer>
      <Text style={styles.textStyle}>{textArray[seconds]}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 20,
    overflow: "hidden",
    fontFamily: "PlayFair-bold",
    textAlign: "left",
    color: Platform.OS === "ios" ? colors.iosmain : colors.androidmain,
    marginVertical: 70,
  },
});

export default GoAgainScreen;
