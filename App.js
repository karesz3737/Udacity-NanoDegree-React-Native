import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { View, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./navigation/TabNavigation";
import { reducer } from "./reducers/data";
import thunk from "redux-thunk";
import { getdata, AsynctTime } from "./data/asyncstorage";
import { LogBox } from "react-native";

export default function App() {
  LogBox.ignoreAllLogs();
  const store = createStore(reducer);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    getdata();
    AsynctTime();
  }, []);
  const fetchFonts = () => {
    return Font.loadAsync({
      "PlayFair-bold": require("./fonts/PlayfairDisplay-Bold.ttf"),
      "PlayFair-regular": require("./fonts/PlayfairDisplay-Regular.ttf"),
      "PlayFair-bold-italic": require("./fonts/PlayfairDisplay-BoldItalic.ttf"),
    });
  };

  if (!isLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onError={(err) => console.log(err, "yjiji")}
        onFinish={() => setIsLoaded(true)}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Provider store={store}>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </Provider>
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
