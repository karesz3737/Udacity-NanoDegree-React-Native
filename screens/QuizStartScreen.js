import React from "react";
import { View, Platform, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../helpers/colors";
import { Mobilcontainer } from "../helpers/containers";
import QuizContainer from "../components/QuizContainer";
const QuizStartScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Mobilcontainer>
        <Ionicons
          name="ios-leaf-outline"
          size={45}
          color={Platform.OS === "ios" ? colors.iosmain : colors.androidmain}
        />
      </Mobilcontainer>
      <QuizContainer
        title={props.route.params.title}
        navigation={props.navigation}
        numberOfQuestions={props.route.params.numberOfQuestions}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
});

export default QuizStartScreen;
