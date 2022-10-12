import { combineReducers } from "@reduxjs/toolkit";

import { counterReducer  } from "../features/counter/slice";

export const rootReducer = combineReducers({
  counter: counterReducer,
});

