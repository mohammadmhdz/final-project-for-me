import {
  EMPLOYEE_DETAILS_REQUEST,
  EMPLOYEE_DETAILS_SUCCESS,
  EMPLOYEE_DETAILS_FAIL,
  //
  EMPLOYEE_FAVORITE_REQUEST,
  EMPLOYEE_FAVORITE_SUCCESS,
  EMPLOYEE_FAVORITE_FAIL,
} from "../constant/employeeConstant";

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
