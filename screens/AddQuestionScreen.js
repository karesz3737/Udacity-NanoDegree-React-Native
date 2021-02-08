import React from "react";
import { View, Text, Platform, StyleSheet } from "react-native";
import { Mobilcontainer } from "../helpers/containers";
import { Ionicons } from "@expo/vector-icons";
import colors from "../helpers/colors";
import AddQuestionContainer from "../components/AddQuestionContainer";

const AddQuestionScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#e8e2e1",
      }}
    >
      <AddQuestionContainer navigation={navigation} />
    </View>
  );
};
export default AddQuestionScreen;
