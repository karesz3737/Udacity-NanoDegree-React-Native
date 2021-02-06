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
        <TouchableOpacity>
          <Text>Hi there</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    width: "100%",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ButtonContainer;
