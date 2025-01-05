import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";

export const reootReducer = combineReducers({
    user: userReducer,
});