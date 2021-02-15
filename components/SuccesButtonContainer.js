import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import colors from "../helpers/colors";

const SuccessButtonContainer = (props) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.buttonMainConfig}
        onPress={() => props.navigation.navigate("TitleScreen")}
      >
        <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>
          Add a new Question
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonMainConfig, { backgroundColor: "#7cd9bd" }]}
        onPress={() => props.navigation.navigate("DeckScreen")}
      >
        <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>
          Go To main Deck
        </Text>
      </TouchableOpacity>
    </View>
  );
};

styles = StyleSheet.create({
  buttonMainConfig: {
    width: 180,
    height: 40,
    borderRadius: 8,
    marginVertical: 25,
    alignSelf: "center",
    paddingVertical: 5,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 1 },
    backgroundColor:
      Platform.OS === "ios" ? colors.iosmain : colors.androidmain,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});

export default SuccessButtonContainer;
