import {
  EMPLOYEE_LIST_ALL_REQUEST,
  EMPLOYEE_LIST_ALL_SUCCESS,
  EMPLOYEE_LIST_ALL_FAIL,
  //
  EMPLOYEE_DETAILS_REQUEST,
  EMPLOYEE_DETAILS_SUCCESS,
  EMPLOYEE_DETAILS_FAIL,
  //
  EMPLOYEE_PORTFOLIO_DETAILS_REQUEST ,
  EMPLOYEE_PORTFOLIO_DETAILS_SUCCESS ,
  EMPLOYEE_PORTFOLIO_DETAILS_FAIL,
  //
  EMPLOYEE_FAVORITE_REQUEST,
  EMPLOYEE_FAVORITE_SUCCESS,
  EMPLOYEE_FAVORITE_FAIL,
  //
  EMPLOYEE_TOGGLE_FAVORITE_REQUEST ,
  EMPLOYEE_TOGGLE_FAVORITE_SUCCESS ,
  EMPLOYEE_TOGGLE_FAVORITE_FAIL ,
  // put
  EMPLOYEE_DETAILS_EDIT_REQUEST,
  EMPLOYEE_DETAILS_EDIT_SUCCESS,
  EMPLOYEE_DETAILS_EDIT_FAIL, 
  //post
  EMPLOYEE_PORTFOLIO_POST_REQUEST ,
  EMPLOYEE_PORTFOLIO_POST_SUCCESS ,
  EMPLOYEE_PORTFOLIO_POST_FAIL, 
 
} from "../constant/employeeConstant";

export const employeeListAllReducer = (state = { employeeList: [] }, action) => {
  switch (action.type) {
    case EMPLOYEE_LIST_ALL_REQUEST:
      return { loading: true, employeeList: [] };

    case EMPLOYEE_LIST_ALL_SUCCESS:
      return {
        loading: false,
        employeeList: action.payload,
      };
    case EMPLOYEE_LIST_ALL_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const employeeDetailsReducer = (state = { employee: [] }, action) => {
  switch (action.type) {
    case EMPLOYEE_DETAILS_REQUEST:
      return { loading: true, employee: [] };

    case EMPLOYEE_DETAILS_SUCCESS:
      return {
        loading: false,
        employee: action.payload,
      };
    case EMPLOYEE_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const employeePortfolioDetailsReducer = (state = { employeePortfolioArray: [] }, action) => {
  switch (action.type) {
    case EMPLOYEE_PORTFOLIO_DETAILS_REQUEST:
      return { loading: true, employeePortfolioArray: [] };

    case EMPLOYEE_PORTFOLIO_DETAILS_SUCCESS:
      return {
        loading: false,
        employeePortfolioArray: action.payload,
      };
    case EMPLOYEE_PORTFOLIO_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const employeeFavoriteListReducer = (
  state = { employeeFavorites: [] },
  action
) => {
  switch (action.type) {
    case EMPLOYEE_FAVORITE_REQUEST:
      return { loading: true, employeeFavorites: [] };

    case EMPLOYEE_FAVORITE_SUCCESS:
      return {
        loading: false,
        employeeFavorites: action.payload,
      };
    case EMPLOYEE_FAVORITE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const employeeToggleFavoriteListReducer = (state = {}, action) => {
  switch (action.type) {
    case EMPLOYEE_TOGGLE_FAVORITE_REQUEST  :
      return { loading: true };

    case EMPLOYEE_TOGGLE_FAVORITE_SUCCESS:
      return { loading: false, toggleInfo: action.payload };

    case EMPLOYEE_TOGGLE_FAVORITE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
// put
export const employeeUpdateDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case EMPLOYEE_DETAILS_EDIT_REQUEST:
      return { loading: true };

    case EMPLOYEE_DETAILS_EDIT_SUCCESS:
      return { loading: false, employeeUpdateSuccesfull: action.payload };

    case EMPLOYEE_DETAILS_EDIT_FAIL:
      return { loading: false, error: action.payload };


    default:
      return state;
  }
};
// post
export const employeeAddPortfolioReducer = (state = {}, action) => {
  switch (action.type) {
    case EMPLOYEE_PORTFOLIO_POST_REQUEST:
      return { loading: true };

    case EMPLOYEE_PORTFOLIO_POST_SUCCESS:
      return { loading: false, addPortfolioResult: action.payload };

    case EMPLOYEE_PORTFOLIO_POST_FAIL:
      return { loading: false, error: action.payload };


    default:
      return state;
  }
};