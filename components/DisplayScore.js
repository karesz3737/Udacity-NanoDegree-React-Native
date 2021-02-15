import React, { useState } from "react";
import { Text, StyleSheet, View, Platform } from "react-native";
import { useSelector } from "react-redux";
import colors from "../helpers/colors";

const DisplayScore = ({ rem }) => {
  const [userScore, setUserScore] = useState(
    useSelector((state) => state.UserScore)
  );

  const userlength = userScore.length;
  const positive = userScore.filter((el) => el > 0).length;
  const total = ((positive / userlength) * 100).toFixed(2);

  return (
    <View style={styles.screen}>
      <Text style={styles.textStyle}>Qustions answered: {userlength}</Text>
      <Text style={styles.textStyle}>Correct Answers: {positive}</Text>
      <Text style={styles.textStyle}>Your Score : {total} %</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    textAlign: "left",
    fontFamily: "PlayFair-bold",
    fontSize: 16,
    marginVertical: 3,
    color: Platform.OS === "ios" ? colors.iosmain : colors.androidmain,
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
 
});

export default DisplayScore;
