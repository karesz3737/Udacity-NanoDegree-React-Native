import * as React from "react";
import { Platform } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigation from "./StackNavigation";
import AddQuestionScreen from "../screens/AddQuestionScreen";
import { QuestionStackNavigator } from "./StackNavigation";
import colors from "../helpers/colors";
import { Ionicons } from "@expo/vector-icons";
const Tab =
  Platform.IO === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const TabNavigation = (props) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Main") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "AddQuestion") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          }
          return <Ionicons name={iconName} size={24} />;
        },
      })}
      barStyle={{
        backgroundColor:
          Platform.OS === "ios" ? colors.iosmain : colors.androidmain,
      }}
      tabBarOptions={{
        activeTintColor: Platform.OS === "ios" ? "#142e40" : colors.androidmain,
        inactiveTintColor: "#aab7bf",
      }}
      shifting={true}
    >
      <Tab.Screen name="Main" component={StackNavigation} />
      <Tab.Screen name="AddQuestion" component={QuestionStackNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
