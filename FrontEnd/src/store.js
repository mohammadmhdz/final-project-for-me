import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { jobListReducer
        , jobsDetailsReducer
        , jobsPostRedducer
        , jobsPostRequirmentsReducer } from "./reducers/jobsReducer";
import {
  employeeListAllReducer,
  employeeDetailsReducer,
  employeePortfolioDetailsReducer,
  employeeFavoriteListReducer,
  employeeToggleFavoriteListReducer,
  employeeUpdateDetailsReducer,
} from "./reducers/employeeReducer";
import { freelancerRequestReducer } from "./reducers/requestsReducer";
import { userLoginReducer } from "./reducers/userReducer";
import {
  companyDetailsReducer,
  companyReviewReducer,
  companyJobsListReducer,
  companyFavoriteEmployeesReducer,
  //post
  companyVerifyReducer,
  //put
  companyUpdateDetailsReducer,
} from "./reducers/companyReducer";
// use selector tu use one of the below reducer

const reducer = combineReducers({
  jobList: jobListReducer,
  jobsDetails: jobsDetailsReducer,
  jobsPost: jobsPostRedducer,
  jobsPostRequirments: jobsPostRequirmentsReducer,
  //
  employeeDetails: employeeDetailsReducer,
  employeePortfolio : employeePortfolioDetailsReducer,
  employeeFavoriteList: employeeFavoriteListReducer,
  employeeToggleFavorite : employeeToggleFavoriteListReducer,
  employeeListAll: employeeListAllReducer,
  employeeUpdateDetails : employeeUpdateDetailsReducer,
  //
  freelancerRequest: freelancerRequestReducer,
  userLogin: userLoginReducer,
  //
  companyDetails: companyDetailsReducer,
  companyJobsList: companyJobsListReducer,
  companyReview: companyReviewReducer,
  companyFavoriteEmployee : companyFavoriteEmployeesReducer,
  companyVerify : companyVerifyReducer ,
  companyUpdateDetail : companyUpdateDetailsReducer
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
