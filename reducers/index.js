import { ADD_ALL_DATA, ADD_DECK } from "../actions/index";

const initial_state = { kertesz: [] };
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

export default dataObjRed;
