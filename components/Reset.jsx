import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { allResetScore } from "../actions/index";
import colors from "../helpers/colors";
// import { clearAll } from "../data/asyncstorage";

const Reset = (props) => {
  const [resetScore, setResetedScore] = useState("Your Score : ");
  const [res, setRes] = useState(true);
  const userScore = useSelector((state) => state.UserScore);
  const userlength = userScore.length;
  const positive = userScore.filter((el) => el > 0).length;
  const total = (positive / userlength) * 100;
  const dispatch = useDispatch();
  const resetAll = () => {
    setResetedScore("Your Score has been reseted!");
    setRes(false);
    setTimeout(() => props.navigation.navigate("DeckScreen"), 700);
    setTimeout(() => dispatch(allResetScore), 700);
  };
  return (
    <View>
      <Text style={styles.textStyle}>{resetScore}</Text>
      <Text style={styles.textStyle}>
        Total Amount of questions: {res ? userlength : "0"}
      </Text>
      <Text style={styles.textStyle}>
        Correct Questions {res ? positive : "0"}
      </Text>
      <Text style={styles.textStyle}>Your Score : {res ? total : "0"} %</Text>
      <TouchableOpacity
        style={styles.buttonMainConfig}
        onPress={() => resetAll()}
      >
        <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>
          Reset Your Score
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    textAlign: "center",
    fontFamily: "PlayFair-bold",
    fontSize: 20,
    marginVertical: 25,
  },
  buttonMainConfig: {
    width: 180,
    height: 40,
    borderRadius: 8,
    marginVertical: 25,
    alignSelf: "center",
    paddingVertical: 5,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 1 },
    backgroundColor:
      Platform.OS === "ios" ? colors.iosmain : colors.androidmain,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
export default Reset;
