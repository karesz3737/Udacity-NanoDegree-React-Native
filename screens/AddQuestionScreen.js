import React from "react";
import { View } from "react-native";
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
