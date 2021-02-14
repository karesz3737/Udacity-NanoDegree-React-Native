import AsyncStorage from "@react-native-async-storage/async-storage";
import { DataObj } from "./data";
export const dataKey = "@allData";
export const timeKey = "@time";
const newdate = new Date(Date.now());
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
    const value = await AsyncStorage.getItem("@allData");
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (err) {
    console.log(err);
  }
};
export const addToStorage = async (a, q, d, id) => {
  let answerData = {
    answer: a,
    question: q,
    id,
  };
  let newObj = {};

  try {
    const jsonValue = await AsyncStorage.getItem("@allData").then((val) =>
      JSON.parse(val)
    );

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
          id,
        },
      };
    }
    await AsyncStorage.setItem("@allData", JSON.stringify(newObj));
  } catch (err) {
    console.log(err);
  }
};

export const AsynctTime = async () => {
  try {
    const jasonvalue = await AsyncStorage.getItem("@time");
    if (jasonvalue !== null) {
      return null;
    } else {
      const jasonvalue = Date.now();
      await AsyncStorage.setItem("@time", JSON.stringify(jasonvalue));
    }
  } catch (err) {
    console.log(err);
  }
};

export const getTimeStamp = async () => {
  try {
    const jasonvalue = await AsyncStorage.getItem("@time");
    if (jasonvalue !== null) {
      return JSON.parse(jasonvalue);
    } else {
    }
  } catch (err) {
    console.log(err);
  }
};

export const resetTime = async () => {
  try {
    const jasonValue = Date.now();
    await AsyncStorage.setItem("@time", JSON.stringify(jasonValue));
  } catch (err) {
    console.log(err);
  }
  console.log("it's done");
};

export const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // clear error
  }
};
