import React from "react";
import { View, Platform, StyleSheet } from "react-native";
import { Mobilcontainer } from "../helpers/containers";
import { Ionicons } from "@expo/vector-icons";
import colors from "../helpers/colors";

const ResetScreen = (props) => {
  const title = props.route.params.title;
  const score = props.route.params.data;
  console.log(score);

  return (
    <View
      style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
    >
      <Mobilcontainer>
        <Ionicons
          name="ios-leaf-outline"
          size={45}
          color={Platform.OS === "ios" ? colors.iosmain : colors.androidmain}
        />
      </Mobilcontainer>
      <View style={styles.mainComp}></View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default ResetScreen;
