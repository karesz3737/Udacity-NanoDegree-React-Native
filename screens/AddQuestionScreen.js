import React from "react";
import { View, Text, Platform, StyleSheet } from "react-native";
import { Mobilcontainer } from "../helpers/containers";
import { Ionicons } from "@expo/vector-icons";
import colors from "../helpers/colors";
import AddQuestionContainer from "../components/AddQuestionContainer";

const AddQuestionScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Mobilcontainer>
        <Ionicons
          name="ios-leaf-outline"
          size={45}
          color={Platform.OS === "ios" ? colors.iosmain : colors.androidmain}
        />
      </Mobilcontainer>
      <Text
        style={{
          fontSize: 18,
          marginBottom: 20,
          color: Platform.OS === "ios" ? "#4fafc4" : colors.androidmain,
          fontFamily: "PlayFair-bold",
        }}
      >
        Add Your Question!
      </Text>
      <AddQuestionContainer navigation={navigation} />
    </View>
  );
};
export default AddQuestionScreen;
