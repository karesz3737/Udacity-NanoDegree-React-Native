import {
  ADD_ALL_DATA,
  ADD_DECK,
  ADD_SCORE,
  RESET_SCORE,
  RESET_DECK,
  RESTART_QUIZ,
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
    case RESET_DECK:
      return state;

    default:
      return state;
  }
};
const initial_state = [];
export const UserScore = (state = initial_state, action) => {
  switch (action.type) {
    case ADD_SCORE:
      return state.concat(action.score);
    case RESET_SCORE:
      return initial_state;

    default:
      return state;
  }
};

export const ResetId = (state = [], action) => {
  switch (action.type) {
    case RESTART_QUIZ: {
      return state.concat(action.rid);
    }
    default:
      return state;
  }
};

export default dataObjRed;
