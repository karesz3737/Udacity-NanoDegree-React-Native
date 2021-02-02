import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../helpers/colors";
import { Mobilcontainer, QuizContainer } from "../helpers/containers";

const QuizScreen = (props) => {
  const title = props.route.params.title;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Mobilcontainer>
        <Ionicons
          name="ios-leaf-outline"
          size={45}
          color={Platform.OS === "ios" ? colors.iosmain : colors.androidmain}
        />
      </Mobilcontainer>
      <QuizContainer title={title} navigation={props.navigation} />
    </View>
  );
};
const styles = StyleSheet.create({});
export default QuizScreen;
