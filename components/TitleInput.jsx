import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  Dimensions,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import colors from "../helpers/colors";
import { Mobilcontainer } from "../helpers/containers";
import { Ionicons } from "@expo/vector-icons";

const TitleInput = (props) => {
  const [deck, setDeck] = useState("");
  const sentSubmit = () => {
    if (deck !== "") {
      props.navigation.navigate("AddQuestionScreen", {
        deck: deck,
      });
      setDeck("");
    }
  };
  return (
    <ScrollView keyboardShouldPersistTaps={"handled"}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "position" : null}
        keyboardVerticalOffset={60}
        style={{ flex: 1 }}
      >
        <View style={styles.screen}>
          <Text style={styles.titleText}>Create Your Deck</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              value={deck || ""}
              onChangeText={(text) => setDeck(text)}
            />
            <View style={{ marginBottom: 35 }}>
              <Mobilcontainer>
                <Ionicons
                  name="leaf-sharp"
                  size={50}
                  color={
                    Platform.OS === "ios" ? colors.iosmain : colors.androidmain
                  }
                />
              </Mobilcontainer>
            </View>

            <View style={styles.submitBtn}>
              <TouchableOpacity>
                <Text
                  style={[
                    styles.titleText,
                    {
                      color: "white",
                      fontFamily: "PlayFair-regular",
                    },
                  ]}
                  onPress={() => sentSubmit()}
                >
                  Create Your Deck
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
const screenWidth = Dimensions.width;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#e8e2e1",
    height: Platform.OS === "ios" ? "100%" : "80%",
  },
  titleText: {
    overflow: "hidden",
    fontFamily: "PlayFair-bold",
    textAlign: "center",
    marginVertical: 10,
    fontSize: 19,
    color: Platform.OS === "ios" ? colors.iosmain : colors.androidmain,
  },
  inputView: {
    flex: 1,
    alignItems: "center",
    width: 300,
    height: "100%",
  },
  input: {
    width: "80%",
    height: 40,
    elevation: 2,
    marginVertical: 30,
    shadowColor: "#ccc",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.6,
    shadowRadius: 3.84,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderColor: "#969190",
  },
  submitBtn: {
    width: "70%",
    height: 40,
    backgroundColor:
      Platform.OS === "ios" ? colors.iosmain : colors.androidmain,
    borderRadius: 5,
    marginBottom: 80,
    alignItems: "center",
  },
});

export default TitleInput;
