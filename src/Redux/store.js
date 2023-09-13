import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

import {authReducer} from "../Redux/AuthRedux/reducer"
import {courseReducer} from "../Redux/CourseRedux/reducer"
const rootReducer = combineReducers({
    auth: authReducer,
    courses:courseReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
