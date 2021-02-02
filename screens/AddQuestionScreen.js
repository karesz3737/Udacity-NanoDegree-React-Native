import React from "react";
import { View, Text, Platform, StyleSheet } from "react-native";
import { Mobilcontainer } from "../helpers/containers";
import { Ionicons } from "@expo/vector-icons";
import colors from "../helpers/colors";

const AddQuestionScreen = (props) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Mobilcontainer>
        <Ionicons
          name="ios-leaf-outline"
          size={45}
          color={Platform.OS === "ios" ? colors.iosmain : colors.androidmain}
        />
      </Mobilcontainer>
      <Text>Add question</Text>
    </View>
  );
};
export default AddQuestionScreen;
