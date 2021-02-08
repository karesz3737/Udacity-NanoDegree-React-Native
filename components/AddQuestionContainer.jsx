import React, { useRef, useState } from "react";
import {
  View,
  Platform,
  StyleSheet,
  Dimensions,
  Button,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import LabelComp from "./LabelComp";
import colors from "../helpers/colors";
import { addToStorage } from "../data/asyncstorage";
import { Header } from "@react-navigation/stack";

const AddQuestionContainer = ({ navigation }) => {
  const { control, handleSubmit, reset } = useForm();
  const deckRef = useRef();
  const questionRef = useRef();
  const answerRef = useRef();
  const [sent, isSent] = useState(false);

  const onSubmit = (data) => {
    const { answer, question, deck } = data;
    addToStorage(answer, question, deck);

    navigation.navigate("SuccessScreen");
    isSent(true);
    reset({
      deckRef: "",
      questionRef: "",
      answerRef: "",
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "height" : null}
      keyboardVerticalOffset={Header.height + 290}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps={"handled"}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.const}>
          <View style={styles.cont}>
            <LabelComp inputname="Deck" />

            <Controller
              control={control}
              render={({ onChange, onBlur, value, name }) => (
                <TextInput
                  style={styles.inputStyle}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  clearTextOnFocus={true}
                  required={true}
                />
              )}
              name="deck"
              defaultValue=""
              rules={{ required: true }}
            />
            <LabelComp inputname="Question" />

            <Controller
              control={control}
              render={({ onChange, onBlur, value, name }) => (
                <TextInput
                  style={styles.inputStyle}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  clearButtonMode={Platform.OS === "ios" ? "always" : "never"}
                  clearTextOnFocus={true}
                  ref={questionRef}
                  autoCapitalize="none"
                />
              )}
              name="question"
              defaultValue=""
              rules={{ required: true }}
            />
            <LabelComp inputname="Answer" />

            <Controller
              control={control}
              render={({ onChange, onBlur, value, name }) => (
                <TextInput
                  style={styles.inputStyle}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  clearTextOnFocus={true}
                  ref={answerRef}
                  autoCapitalize="none"
                />
              )}
              name="answer"
              defaultValue=""
              rules={{ required: true }}
            />
            <View style={styles.submitBtn}>
              <Button
                title="Submit"
                onPress={handleSubmit(onSubmit)}
                color={Platform.OS === "ios" ? "white" : colors.androidmain}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const screen = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;
const styles = StyleSheet.create({
  const: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#e8e2e1",
    height: Platform.OS === "ios" ? "60%" : "80%",
  },
  cont: {
    width: "100%",
    flex: 1,
    backgroundColor: "#e8e2e1",
  },
  inputStyle: {
    width: 350,
    height: 40,
    elevation: 2,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    paddingHorizontal: 10,
    borderWidth: 1,
  },
  submitBtn: {
    width: "100%",
    height: 40,
    backgroundColor: Platform.OS === "ios" ? colors.iosmain : "transparent",
    borderRadius: 5,
    marginTop: 50,
  },
});
export default AddQuestionContainer;
