import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { jobListReducer } from "./reducers/jobsReducer";
import { employeeListReducer } from "./reducers/employeeReducer";
import { freelancerRequestReducer } from "./reducers/requestsReducer";
// use selector tu use one of the below reducers
const reducer = combineReducers({
  jobList: jobListReducer,
  employeeListDetails: employeeListReducer,
  freelancerRequest: freelancerRequestReducer,
});
const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
