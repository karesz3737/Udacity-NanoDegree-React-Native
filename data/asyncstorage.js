import AsyncStorage from "@react-native-async-storage/async-storage";
import { DataObj } from "./data";
export const dataKey = "@allData";

export const getdata = async () => {
  try {
    const value = await AsyncStorage.getItem("@allData");
    if (value !== null) {
      return null;
    } else {
      try {
        const value = JSON.stringify(DataObj);
        await AsyncStorage.setItem(dataKey, value);
      } catch (err) {
        console.log(err);
      }
    }
  } catch (err) {
    console.log(err);
  }
};

export const getItems = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@allData");
    if (jsonValue !== null) {
      return JSON.parse(jsonValue);
    }
  } catch (e) {
    console.log(e);
  }
};

export const getOneItem = async () => {
  try {
    const value = await AsyncStorage.getItem("@allData")
      .then((val) => JSON.parse(val))
      .then((val) => val["React"].questions);
    console.log(value);
  } catch (err) {
    console.log(err);
  }
};
export const addToStorage = async (a, q, d) => {
  let answerData = {
    answer: a,
    question: q,
  };
  let newObj = {};

  try {
    const jsonValue = await AsyncStorage.getItem("@allData").then((val) =>
      JSON.parse(val)
    );
    console.log(jsonValue);
    if (Object.keys(jsonValue).includes(d)) {
      newObj = {
        ...jsonValue,
        [d]: {
          ...jsonValue[d],
          questions: [...jsonValue[d].questions, answerData],
        },
      };
    } else {
      newObj = {
        ...jsonValue,
        [d]: {
          questions: [answerData],
          title: d,
        },
      };
    }
    await AsyncStorage.setItem("@allData", JSON.stringify(newObj));
  } catch (err) {
    console.log(err);
  }
};

export const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // clear error
  }

  console.log("Done.");
};
