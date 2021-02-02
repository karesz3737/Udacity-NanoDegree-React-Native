import * as React from "react";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import { Platform } from "react-native";
import DeckScreen from "../screens/DeckScreen";
import QuizScreen from "../screens/QuizScreen";
import QuizStartScreen from "../screens/QuizStartScreen";
import AddQuestionScreen from "../screens/AddQuestionScreen";
import colors from "../helpers/colors";

const Stack = createStackNavigator();

const StackNavigation = (props) => {
  const headerStyleMain = {
    headerStyle: {
      backgroundColor:
        Platform.OS === "ios" ? colors.iosmain : colors.androidmain,
    },
    headerTintColor: "white",
  };
  return (
    <Stack.Navigator initialRouteName="DeckScreen">
      <Stack.Screen
        component={DeckScreen}
        name="DeckScreen"
        options={{
          headerStyle: headerStyleMain.headerStyle,
          headerTintColor: headerStyleMain.headerTintColor,
          headerTitle: "Main Deck",
        }}
      />
      <Stack.Screen
        name="QuizScreen"
        component={QuizScreen}
        options={{
          headerStyle: headerStyleMain.headerStyle,
          headerTintColor: headerStyleMain.headerTintColor,
          headerTitle: "Quiz",
        }}
      />
      <Stack.Screen
        name="QuizStartScreen"
        component={QuizStartScreen}
        options={{
          headerStyle: headerStyleMain.headerStyle,
          headerTintColor: headerStyleMain.headerTintColor,
          headerTitle: "Start Your Quiz",
        }}
      />
    </Stack.Navigator>
  );
};
export const QuestionStackNavigator = () => {
  const headerStyleMain = {
    headerStyle: {
      backgroundColor:
        Platform.OS === "ios" ? colors.iosmain : colors.androidmain,
    },
    headerTintColor: "white",
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AddQuestionScreen"
        component={AddQuestionScreen}
        options={{
          headerStyle: headerStyleMain.headerStyle,
          headerTintColor: headerStyleMain.headerTintColor,
          headerTitle: "Add Your Question",
        }}
      />
    </Stack.Navigator>
  );
};
export default StackNavigation;
