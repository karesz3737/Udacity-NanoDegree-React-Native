import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./navigation/StackNavigation";
import TabNavigation from "./navigation/TabNavigation";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchFonts = () => {
    return Font.loadAsync({
      "PlayFair-bold": require("./fonts/PlayfairDisplay-Bold.ttf"),
      "PlayFair-regular": require("./fonts/PlayfairDisplay-Regular.ttf"),
    });
  };

  if (!isLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onError={(err) => console.log(err)}
        onFinish={() => setIsLoaded(true)}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#f7f7f7",
  },
});
