import React from "react";
import { View, Platform, StyleSheet } from "react-native";
import { Mobilcontainer } from "../helpers/containers";
import { Ionicons } from "@expo/vector-icons";
import colors from "../helpers/colors";
import Reset from "../components/Reset";

const ResetScreen = (props) => {
  const title = props.route.params.title;
  return (
    <View style={styles.screen}>
      <Mobilcontainer>
        <Ionicons
          name="ios-leaf-outline"
          size={45}
          color={Platform.OS === "ios" ? colors.iosmain : colors.androidmain}
        />
      </Mobilcontainer>
      <View style={styles.mainComp}>
        <Reset title={title} navigation={props.navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainComp: {
    flex: 1,
    width: "100%",
    backgroundColor: "#f7f7f7",
    justifyContent: "center",
    alignItems: "center",
  },
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default ResetScreen;
