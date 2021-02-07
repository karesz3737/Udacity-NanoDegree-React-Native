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
    return jsonValue != null ? JSON.parse(jsonValue) : null;
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
const addToStorage = (a, q, d) => {
  let reply = {
    question: q,
    answer: a,
  };
  let jsonValue = JSON.stringify(reply);

  
  try {
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
