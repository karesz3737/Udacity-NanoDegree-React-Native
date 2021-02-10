import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import SuccessButtonContainer from "../components/SuccesButtonContainer";
const SuccessScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={{ paddingVertical: 20 }}>
        <ImageBackground
          source={require("../assets/images/ClipartKey_578544.png")}
          style={styles.imageCont}
        />
      </View>
      <Text style={{ fontFamily: "PlayFair-bold-italic", fontSize: 20 }}>
        Success
      </Text>
      <SuccessButtonContainer navigation={props.navigation} />
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
  screen: {
    flex: 1,
    backgroundColor: "#e8e2e1",
    alignItems: "center",
  },
});

export default SuccessScreen;
