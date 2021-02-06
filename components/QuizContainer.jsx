import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import colors from "../helpers/colors";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Dimensions,
} from "react-native";

const QuizContainer = (props) => {
  const [score, setScore] = useState([]);
  const [nextMove, setNextMove] = useState(0);
  const question = useSelector((state) => state[props.title].questions);
  const [ttt, setRRR] = useState("question");
  const [disabled, setDisabled] = useState(false);

  const addNext = () => {
    if (nextMove !== undefined && nextMove !== question.length - 1) {
      setNextMove((curr) => curr + 1);
      setRRR("question");
    } else {
      setDisabled(true);
      props.navigation.push("ResetScreen", {
        data: score,
        title: props.title,
      });
    }
  };
  const display = (tit, nextMove) => {
    const questionOrAnswer = useSelector(
      (state) => state[props.title].questions
    );
    const current = questionOrAnswer[nextMove][tit];
    return current;
  };

  const setNextScore = (val) => {
    setScore(() => score.concat([val]));
    setTimeout(() => addNext(), 500);
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: "center",
          fontFamily: "PlayFair-bold",
          paddingVertical: 15,
          fontSize: 19,
          color: Platform.OS === "ios" ? colors.iosmain : colors.androidmain,
        }}
      >
        Let's Begin...
      </Text>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{display(ttt, nextMove)}</Text>
      </View>
      <View style={styles.contSec}>
        <TouchableOpacity
          onPress={() => setRRR("answer")}
          style={[
            styles.buttonMainConfig,
            {
              backgroundColor:
                Platform.OS === "ios" ? colors.iosmain : colors.androidmain,
            },
          ]}
        >
          <Text style={{ textAlign: "center", fontSize: 17 }}>View Answer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setNextScore(100)}
          style={[styles.buttonMainConfig, { backgroundColor: "#b6f7b0" }]}
        >
          <Text style={{ textAlign: "center", fontSize: 17 }}>
            Correct Answer
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonMainConfig, { backgroundColor: "#f7673b" }]}
        >
          <Text
            style={{ textAlign: "center", fontSize: 17 }}
            onPress={() => setNextScore(150)}
          >
            Incorrect Answer
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.buttonMainConfig,
            {
              backgroundColor: !disabled
                ? "#dba951"
                : "rgba(199, 198, 195,0.5)",
            },
          ]}
          disabled={disabled ? `disabled` : ""}
          onPress={addNext}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 17,
              opacity: !disabled ? 0.9 : 0.2,
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const screen = Dimensions.get("screen").width;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e8eded",
    width: screen < 320 ? 280 : 320,
    height: 500,
  },
  titleText: {
    overflow: "hidden",
    fontFamily: "PlayFair-bold",
    textAlign: "center",
    flexDirection: "row",
    flex: 1,
    padding: 10,
  },
  textContainer: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#f7f7f7",
    height: "40%",
  },
  contSec: {
    height: "70%",
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 30,
  },
  buttonMainConfig: {
    width: "85%",
    height: 40,
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 1 },
  },
});

export default QuizContainer;
