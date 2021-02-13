import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const Correct = (props) => {
  return (
    <View style={styles.screen}>
      <TouchableOpacity
        onPress={() => props.setNextPositivScore()}
        style={[styles.buttonMainConfig, { backgroundColor: "#b6f7b0" }]}
      >
        <Text style={{ textAlign: "center", fontSize: 17 }}>Correct</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonMainConfig, { backgroundColor: "#f7673b" }]}
      >
        <Text
          style={{ textAlign: "center", fontSize: 17 }}
          onPress={() => props.setNegativScore()}
        >
          Incorrect
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonMainConfig: {
    width: "36%",
    height: 40,
    marginVertical: 15,
    marginHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 1 },
  },
});

export default Correct;
