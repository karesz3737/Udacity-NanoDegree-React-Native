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
import TitleScreen from "../screens/TitleScreen";

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
        name="AddQuestionScreen"
        component={AddQuestionScreen}
        options={({ route, navigation }) => ({
          headerStyle: headerStyleMain.headerStyle,
          headerTintColor: headerStyleMain.headerTintColor,
          headerTitle: route.params.title,
          headerBackTitle: "Back Home",
          headerLeft: (props) => {
            return (
              <HeaderBackButton
                label="Back Home"
                {...props}
                onPress={() => navigation.navigate("DeckScreen")}
              />
            );
          },
        })}
      />
      <Stack.Screen
        name="SuccessScreen"
        component={SuccessScreen}
        options={({ navigation }) => ({
          headerStyle: headerStyleMain.headerStyle,
          headerTintColor: headerStyleMain.headerTintColor,
          headerTitle: "Success",
          headerBackTitle: "Back Home",
          headerLeft: (props) => {
            return (
              <HeaderBackButton
                label="Back Home"
                {...props}
                onPress={() => navigation.navigate("DeckScreen")}
              />
            );
          },
        })}
      />
      <Stack.Screen
        name="TitleScreen"
        component={TitleScreen}
        options={{
          headerStyle: headerStyleMain.headerStyle,
          headerTintColor: headerStyleMain.headerTintColor,
          headerTitle: "Create Your Deck",
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
    <Stack.Navigator initialRouteName="TitleScreen">
      <Stack.Screen
        name="TitleScreen"
        component={TitleScreen}
        options={{
          headerStyle: headerStyleMain.headerStyle,
          headerTintColor: headerStyleMain.headerTintColor,
          headerTitle: "Create Your Deck",
        }}
      />
      <Stack.Screen
        name="AddQuestionScreen"
        component={AddQuestionScreen}
        options={({ route, navigation }) => ({
          headerStyle: headerStyleMain.headerStyle,
          headerTintColor: headerStyleMain.headerTintColor,
          headerTitle: route.params.deck,
          headerBackTitle: "Back Home",
          headerLeft: (props) => {
            return (
              <HeaderBackButton
                label="Back Home"
                {...props}
                onPress={() => navigation.navigate("DeckScreen")}
              />
            );
          },
        })}
      />
      <Stack.Screen
        name="SuccessScreen"
        component={SuccessScreen}
        options={() => ({
          headerStyle: headerStyleMain.headerStyle,
          headerTintColor: headerStyleMain.headerTintColor,
          headerTitle: "Success",
          headerLeft: (props) => {
            return (
              <HeaderBackButton
                label="Back Home"
                {...props}
                onPress={() => navigation.navigate("DeckScreen")}
              />
            );
          },
        })}
      />
    </Stack.Navigator>
  );
};
export default StackNavigation;
