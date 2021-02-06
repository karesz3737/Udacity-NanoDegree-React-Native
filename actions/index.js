export const ADD_ALL_DATA = "ADD_ALL_DATA";
export const ADD_DECK = "ADD_DECK";

export const addAllData = (data) => {
  return {
    type: ADD_ALL_DATA,
    data,
  };
};

export const addDeck = (answer, question, deck) => {
  return {
    type: ADD_DECK,
    answer,
    question,
    deck,
  };
};
