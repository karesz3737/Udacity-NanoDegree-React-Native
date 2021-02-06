import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../helpers/colors";
import { Mobilcontainer } from "../helpers/containers";
import { QuizContainerHelper } from "../helpers/containers";

const QuizScreen = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Mobilcontainer>
        <Ionicons
          name="ios-leaf-outline"
          size={45}
          color={Platform.OS === "ios" ? colors.iosmain : colors.androidmain}
        />
      </Mobilcontainer>
      <QuizContainerHelper
        navigation={props.navigation}
        title={props.route.params.title}
      />
    </View>
  );
};

export default QuizScreen;
