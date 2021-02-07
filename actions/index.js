export const ADD_ALL_DATA = "ADD_ALL_DATA";
export const ADD_DECK = "ADD_DECK";
export const ADD_SCORE = "ADD_SCORE";
export const RESET_SCORE = "RESET_SCORE";

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

export const addScore = (score) => {
  return {
    type: ADD_SCORE,
    score,
  };
};

export const allResetScore = () => {
  return function () {
    resetScore();
  };
};

export const resetScore = () => {
  return {
    type: RESET_SCORE,
  };
};
