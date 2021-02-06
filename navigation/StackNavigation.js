import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform, Button } from "react-native";
import DeckScreen from "../screens/DeckScreen";
import QuizScreen from "../screens/QuizScreen";
import QuizStartScreen from "../screens/QuizStartScreen";
import AddQuestionScreen from "../screens/AddQuestionScreen";
import SuccessScreen from "../screens/SuccessScreen";
import colors from "../helpers/colors";
import { HeaderBackButton } from "@react-navigation/stack";
import ResetScreen from "../screens/ResetScreen";

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
      <Stack.Screen
        name="ResetScreen"
        component={ResetScreen}
        options={({ navigation }) => ({
          headerStyle: headerStyleMain.headerStyle,
          headerTintColor: "white",
          headerTitle: "Reset Your Score",

          headerLeft: (props) => {
            return <HeaderBackButton onPress={() => navigation.popToTop()} />;
          },
        })}
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
      <Stack.Screen
        name="SuccessScreen"
        component={SuccessScreen}
        options={{
          headerStyle: headerStyleMain.headerStyle,
          headerTintColor: headerStyleMain.headerTintColor,
          headerTitle: "Success",
        }}
      />
    </Stack.Navigator>
  );
};
export default StackNavigation;
