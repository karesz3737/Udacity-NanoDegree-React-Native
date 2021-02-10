import React from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../helpers/colors";
import { Mobilcontainer } from "../helpers/containers";
import { QuizContainerHelper } from "../helpers/containers";

const QuizScreen = (props) => {
  const title = props.route.params.title;
  const numberOfQuestions = useSelector(
    (state) => state.data[title].questions.length
  );

  return (
    <View style={styles.screen}>
      <Mobilcontainer>
        <Ionicons
          name="ios-leaf-outline"
          size={45}
          color={Platform.OS === "ios" ? colors.iosmain : colors.androidmain}
        />
      </Mobilcontainer>
      <QuizContainerHelper
        navigation={props.navigation}
        title={title}
        numberOfQuestions={numberOfQuestions}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default QuizScreen;
