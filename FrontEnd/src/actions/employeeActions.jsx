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
  //

} from "../constant/employeeConstant";
import axios from "axios";

export const employeeListAll = () => async (dispatch) => {
  try {
    dispatch({ type:  EMPLOYEE_LIST_ALL_REQUEST });
    const { data } = await axios.get(
      `http://127.0.0.1:8000/api/employees/`
    );
    dispatch({
      type: EMPLOYEE_LIST_ALL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EMPLOYEE_LIST_ALL_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export const employeeDetails = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: EMPLOYEE_DETAILS_REQUEST });
    // console.log(keyword);
    const { data } = await axios.get(
      `http://127.0.0.1:8000/api/employees/${keyword}/`
    );
    dispatch({
      type: EMPLOYEE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EMPLOYEE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const employeePortfolioDetails = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: EMPLOYEE_PORTFOLIO_DETAILS_REQUEST });
    // console.log(keyword);
    const { data } = await axios.get(
      `http://127.0.0.1:8000/api/employees/${keyword}/get_portfolio/`
    );
    dispatch({
      type: EMPLOYEE_PORTFOLIO_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EMPLOYEE_PORTFOLIO_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const employeeFavoriteList = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: EMPLOYEE_FAVORITE_REQUEST });
    // console.log(keyword);
    const { data } = await axios.get(
      `http://127.0.0.1:8000/api/employees/${keyword}/retrieve_favorite_jobs/`
    );
    dispatch({
      type: EMPLOYEE_FAVORITE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EMPLOYEE_FAVORITE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const employeeToggleFavoriteList = (inputData) => async (dispatch) => {
  // console.log(data)
  try {
    console.log(inputData);
    dispatch({
      type: EMPLOYEE_TOGGLE_FAVORITE_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      `http://127.0.0.1:8000/api/employees/${inputData}/toggle_favorite_job/`,
      {"job_id": "1"},
      config
    );

    dispatch({
      type: EMPLOYEE_TOGGLE_FAVORITE_SUCCESS,
      payload: data,
    });

  } catch (error) {
    dispatch({
      type: EMPLOYEE_TOGGLE_FAVORITE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
