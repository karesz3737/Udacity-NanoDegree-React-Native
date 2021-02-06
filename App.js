import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./navigation/TabNavigation";
import dataObjRed from "./reducers/index";
import thunk from "redux-thunk";

export default function App() {
  const store = createStore(dataObjRed);
  // console.log("Initial state: ", store.getState());
  const [isLoaded, setIsLoaded] = useState(false);

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
        onError={(err) => console.log(err)}
        onFinish={() => setIsLoaded(true)}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <NavigationContainer>
        <Provider store={store}>
          <TabNavigation />
        </Provider>
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
