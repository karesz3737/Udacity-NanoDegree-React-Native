import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Dimensions,
} from "react-native";
import colors from "../helpers/colors";
const QuizContainer = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: "center",
          fontFamily: "PlayFair-bold",
          paddingVertical: 10,
        }}
      >
        Let's Begin...
      </Text>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
          perspiciatis aspernatur voluptatem eum eveniet! Quaerat adipisci
          veritatis eius perspiciatis cumque.
        </Text>
      </View>
      <View style={styles.contSec}>
        <TouchableOpacity
          style={[
            styles.buttonMainConfig,
            {
              backgroundColor:
                Platform.OS === "ios" ? colors.iosmain : colors.androidmain,
            },
          ]}
        >
          <Text style={{ textAlign: "center" }}> View Answer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonMainConfig, { backgroundColor: "#b6f7b0" }]}
        >
          <Text style={{ textAlign: "center" }}> Correct Answer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonMainConfig, { backgroundColor: "#f7673b" }]}
        >
          <Text style={{ textAlign: "center" }}> Incorrect Answer</Text>
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
    height: 400,
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
    height: "60%",
    flexDirection: "column",
    alignItems: "center",
  },
  buttonMainConfig: {
    width: "85%",
    height: 50,
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
