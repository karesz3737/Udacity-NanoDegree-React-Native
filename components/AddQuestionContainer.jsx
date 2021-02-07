import React, { useRef, useState, useEffect } from "react";
import {
  Text,
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
import { addDeck } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";

const AddQuestionContainer = ({ navigation }) => {
  const { control, handleSubmit, reset, register, watch } = useForm();
  const deckRef = useRef();
  const questionRef = useRef();
  const answerRef = useRef();
  const [sent, isSent] = useState(false);

  const dispatch = useDispatch();
  // const state = useSelector((state) => state.data);

  const onSubmit = (data) => {
    const { answer, question, deck } = data;
    dispatch(addDeck(answer, question, deck));
    navigation.navigate("SuccessScreen");
    isSent(true);
    reset({
      deckRef: "",
      questionRef: "",
      answerRef: "",
    });
  };

  return (
    <View style={styles.const}>
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={30}
          style={{ flex: 1 }}
        >
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
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

const screen = Dimensions.get("screen").width;
const styles = StyleSheet.create({
  const: {
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 1 },
    width: 400,
    backgroundColor: "#e8e2e1",
    height: "100%",
  },
  cont: {
    width: "100%",
  },
  inputStyle: {
    width: 300,
    height: 50,
    elevation: 2,
    // shadowColor: "black",
    // shadowOpacity: 0.26,
    // shadowOffset: { width: 0, height: 1 },
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    paddingHorizontal: 20,
    borderWidth: 1,
  },
  submitBtn: {
    width: "100%",
    height: 40,
    backgroundColor: Platform.OS === "ios" ? colors.iosmain : "transparent",
    borderRadius: 5,
    marginVertical: 30,
  },
});
export default AddQuestionContainer;
