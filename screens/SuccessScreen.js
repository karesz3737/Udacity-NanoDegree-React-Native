import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ImageBackgroundComponent,
} from "react-native";

const SuccessScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#e8e2e1", alignItems: "center" }}>
      <View style={{ paddingVertical: 20 }}>
        <ImageBackground
          source={require("../assets/images/ClipartKey_578544.png")}
          style={styles.imageCont}
        />
      </View>
      <Text style={{ fontFamily: "PlayFair-bold-italic", fontSize: 20 }}>
        Success
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageCont: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 40,
  },
});

export default SuccessScreen;
