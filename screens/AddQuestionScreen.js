import React from "react";
import { View } from "react-native";
import AddQuestionContainer from "../components/AddQuestionContainer";

const AddQuestionScreen = (props) => {
  const deck = props.route.params.deck;
  const title = props.route.params.title;

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#e8e2e1",
      }}
    >
      {title ? (
        <AddQuestionContainer navigation={props.navigation} deck={title} />
      ) : (
        <AddQuestionContainer navigation={props.navigation} deck={deck} />
      )}
    </View>
  );
};
export default AddQuestionScreen;
