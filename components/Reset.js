import React, { useState, useEffect } from "react";
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

const Reset = (props) => {
  const item = props.userScore;
  const [userScoreS, setUserScoreS] = useState([]);
  useEffect(() => {
    if (item) {
      setUserScoreS(item);
    } else {
    }
  }, [item]);
  const [resetScore, setResetedScore] = useState("Your Score : ");
  const [res, setRes] = useState(true);
  const userlength = userScoreS.length;
  const positive = userScoreS.filter((el) => el > 0).length;
  const total = (positive / userlength) * 100;
  const dispatch = useDispatch();
  const resetAll = () => {
    dispatch(allResetScore);
    setRes((curr) => !curr);
  };
  return (
    <View>
      <Text style={styles.textStyle}>
        {!res ? "Your Score has been reseted!" : " Your Score"}
      </Text>
      <Text style={styles.textStyle}>
        Total Amount of questions: {res ? userlength : "0"}
      </Text>
      <Text style={styles.textStyle}>
        Correct Questions {res ? positive : "0"}
      </Text>
      <Text style={styles.textStyle}>
        Your Score : {res && item ? total.toFixed(0) : "0"} %
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonMainConfig}
          onPress={() => resetAll()}
        >
          <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>
            {res ? "Reset Your Score" : "View Your Score"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonMainConfig, { backgroundColor: "#7cd9bd" }]}
          onPress={() => props.navigation.navigate("DeckScreen")}
        >
          <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>
            Go To main Deck
          </Text>
        </TouchableOpacity>
      </View>
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
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});
export default Reset;
