import { combineReducers, applyMiddleware } from "redux";
import dataObjRed from "../reducers/index";
import { UserScore, ResetId } from "../reducers/index";

export const reducer = combineReducers({
  data: dataObjRed,
  UserScore,
  reset: ResetId,
});
