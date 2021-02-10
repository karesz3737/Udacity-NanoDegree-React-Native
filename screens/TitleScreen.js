import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { Mobilcontainer } from "../helpers/containers";
import TitleInput from "../components/TitleInput";
import { Ionicons } from "@expo/vector-icons";
import colors from "../helpers/colors";

const TitleScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Mobilcontainer>
        <Ionicons
          name="ios-leaf-outline"
          size={45}
          color={Platform.OS === "ios" ? colors.iosmain : colors.androidmain}
        />
      </Mobilcontainer>
      <TitleInput navigation={props.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default TitleScreen;
