import {
  ADD_ALL_DATA,
  ADD_DECK,
  ADD_SCORE,
  RESET_SCORE,
} from "../actions/index";

const dataObjRed = (state = {}, action) => {
  switch (action.type) {
    case ADD_ALL_DATA:
      return {
        ...state,
        ...action.data,
      };
    case ADD_DECK:
      const { deck, answer, question } = action;
      if (Object.keys(state).includes(deck)) {
        return {
          ...state,
          [deck]: {
            ...state[deck],
            questions: [...state[deck].questions, { answer, question }],
          },
        };
      } else {
        return {
          ...state,
          [deck]: {
            questions: [{ answer, question }],
            title: deck,
          },
        };
      }

    default:
      return state;
  }
};

export const UserScore = (state = [], action) => {
  switch (action.type) {
    case ADD_SCORE:
      return state.concat(action.score);
    case RESET_SCORE:
      return [];
    default:
      return state;
  }
};

export default dataObjRed;
