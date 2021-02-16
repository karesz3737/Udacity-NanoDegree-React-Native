import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import colors from "../helpers/colors";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Dimensions,
  Alert,
  ScrollView,
} from "react-native";
import { addScore } from "../actions/index";
import DisplayScore from "./DisplayScore";
import { RemainingQuestions } from "../helpers/containers";
import Correct from "./Correct";
import { resetTime, getOneItem } from "../data/asyncstorage";

const QuizContainer = (props) => {
  useEffect(() => {
    const unsubscribe = props.navigation.addListener("focus", () => {
      getOneItem().then((val) => setQuestion(val[props.title].questions));
    });

    return unsubscribe;
  }, [props.navigation]);

  const [nextMove, setNextMove] = useState(0);
  const [question, setQuestion] = useState(null);
  const [ttt, setRRR] = useState("question");
  const [disabled, setDisabled] = useState(false);
  const [remaingQuestions, setremaingQuestions] = useState(
    props.numberOfQuestions
  );

  const dispatch = useDispatch();

  const addNext = () => {
    if (question !== null) {
      if (nextMove !== undefined && nextMove != question.length - 1) {
        setNextMove((curr) => curr + 1);
        setRRR("question");
        setremaingQuestions((curr) => curr - 1);
        resetTime();
      } else {
        setDisabled(true);
        setremaingQuestions(0);
      }
    }
  };
  const updateF = () => {
    setNextMove(0);
    setDisabled(false);
    setRRR("question");
    setremaingQuestions(props.numberOfQuestions);
    props.navigation.navigate("GoAgainScreen", { title: props.title });
  };

  const setNegativScore = () => {
    dispatch(addScore(0));
    addNext();
  };
  const setNextPositivScore = () => {
    dispatch(addScore(1));
    addNext();
  };
  const viewAnswer = () => {
    setRRR("answer");
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text
          style={
            remaingQuestions !== 0
              ? styles.uperContainerText
              : styles.displayNone
          }
        >
          Let's Begin...
        </Text>
        {remaingQuestions !== 0 ? (
          <RemainingQuestions remaingQuestions={remaingQuestions} />
        ) : (
          <DisplayScore rem={remaingQuestions} />
        )}
        <View style={styles.textContainer}>
          <Text
            style={
              remaingQuestions !== 0 ? styles.titleText : styles.displayNone
            }
          >
            {question !== null ? question[nextMove][ttt] : "Loading..."}
          </Text>
        </View>
        <View
          style={
            remaingQuestions !== 0 ? styles.displayNone : styles.buttonConfig
          }
        >
          <TouchableOpacity
            style={[styles.bbb, { backgroundColor: "#fcba03" }]}
            onPress={() => updateF()}
          >
            <Text style={styles.textStyle}>Restart Quiz!</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.bbb, { backgroundColor: "#7cd9bd" }]}
            onPress={() => props.navigation.navigate("DeckScreen")}
          >
            <Text style={styles.textStyle}>Back to Deck</Text>
          </TouchableOpacity>
        </View>
        <View
          style={remaingQuestions !== 0 ? styles.contSec : styles.displayNone}
        >
          <TouchableOpacity
            onPress={() => viewAnswer()}
            style={[
              styles.buttonMainConfig,
              {
                backgroundColor:
                  Platform.OS === "ios" ? colors.iosmain : colors.androidmain,
              },
            ]}
          >
            <Text style={{ textAlign: "center", fontSize: 17 }}>
              View Answer
            </Text>
          </TouchableOpacity>
          <Correct
            setNextPositivScore={setNextPositivScore}
            setNegativScore={setNegativScore}
          />

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
            onPress={() =>
              Alert.alert(
                "HI!!!",
                "You are about to leave without getting a score",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                  },
                  { text: "OK", onPress: () => setNegativScore() },
                ],
                { cancelable: false }
              )
            }
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
    </ScrollView>
  );
};
const screen = Dimensions.get("screen").width;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e8eded",
    width: screen < 320 ? 280 : 320,
    height: "100%",
  },
  textStyle: {
    textAlign: "center",
    fontSize: 14,
    overflow: "hidden",
    fontFamily: "PlayFair-regular",
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
    height: "75%",
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 30,
  },
  buttonMainConfig: {
    width: "80%",
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
  uperContainerText: {
    textAlign: "center",
    fontFamily: "PlayFair-bold",
    paddingVertical: 5,
    fontSize: 17,
    color: Platform.OS === "ios" ? colors.iosmain : colors.androidmain,
  },
  buttonConfig: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 40,
    marginVertical: 200,
  },
  bbb: {
    height: 40,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    marginHorizontal: 15,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 1 },
    width: "35%",
  },
  displayNone: {
    display: "none",
    backgroundColor: "#e8eded",
  },
});

export default QuizContainer;
