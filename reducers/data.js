import { combineReducers, applyMiddleware } from "redux";
import dataObjRed from "../reducers/index";
import { UserScore } from "../reducers/index";

export const reducer = combineReducers({ data: dataObjRed, UserScore });
