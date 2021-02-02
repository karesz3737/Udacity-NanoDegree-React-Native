import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../helpers/colors";
import { Mobilcontainer } from "../helpers/containers";
import QuizContainer from "../components/QuizContainer";
const QuizStartScreen = (props) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Mobilcontainer>
        <Ionicons
          name="ios-leaf-outline"
          size={45}
          color={Platform.OS === "ios" ? colors.iosmain : colors.androidmain}
        />
      </Mobilcontainer>
      <QuizContainer />
    </View>
  );
};

export default QuizStartScreen;
