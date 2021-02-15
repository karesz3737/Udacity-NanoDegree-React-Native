import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Platform,
  StyleSheet,
} from "react-native";

const ButtonContainer = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.cont}>
        <TouchableOpacity style={styles.buttonMainConfig}>
          <Text>Start A New Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonMainConfig: {
    width: "80%",
    height: 40,
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 1, backgroundColor: "#fcba03" },
  },
  cont: {
    backgroundColor: "#e8eded",
  },
});
export default ButtonContainer;
