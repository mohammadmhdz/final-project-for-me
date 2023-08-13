import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { jobListReducer } from "./reducers/jobsReducer";
import { employeeListReducer } from "./reducers/employeeReducer";
import { freelancerRequestReducer } from "./reducers/requestsReducer";
import { userLoginReducer } from "./reducers/userReducer";
// use selector tu use one of the below reducers
const reducer = combineReducers({
  jobList: jobListReducer,
  employeeListDetails: employeeListReducer,
  freelancerRequest: freelancerRequestReducer,
  userLogin: userLoginReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = { userLogin: { userInfo: userInfoFromStorage } };
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
