import {
  COMPANY_DETAILS_REQUEST,
  COMPANY_DETAILS_SUCCESS,
  COMPANY_DETAILS_FAIL,
  //
  COMPANY_REVIEWS_REQUEST,
  COMPANY_REVIEWS_SUCCESS,
  COMPANY_REVIEWS_FAIL,
  //
  COMPANY_JOBS_LIST_REQUEST,
  COMPANY_JOBS_LIST_SUCCESS,
  COMPANY_JOBS_LIST_FAIL,
  //
  COMPANY_FAVORITE_EMPLOYEE_REQUEST ,
  COMPANY_FAVORITE_EMPLOYEE_SUCCESS ,
  COMPANY_FAVORITE_EMPLOYEE_FAIL ,
} from "../constant/companyConstant";
import axios from "axios";

export const companyDetails = (keyword) => async (dispatch) => {
  console.log(keyword);
  try {
    dispatch({ type: COMPANY_DETAILS_REQUEST });

    // const { data } = await axios.get(`/api/products${keyword}`)
    const { data } = await axios.get(`http://127.0.0.1:8000/api/companies/${keyword}`);
    dispatch({
      type: COMPANY_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COMPANY_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const companyReviewGet = () => async (dispatch) => {
  try {
    dispatch({ type: COMPANY_REVIEWS_REQUEST });

    // const { data } = await axios.get(`/api/products${keyword}`)
    const { data } = await axios.get(
      `http://127.0.0.1:8000/api/companies/1/get_reviews/`
    );
    // console.log(data);
    dispatch({
      type: COMPANY_REVIEWS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COMPANY_REVIEWS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const companyFavoriteEmployees = () => async (dispatch) => {
  try {
    dispatch({ type: COMPANY_FAVORITE_EMPLOYEE_REQUEST });

    // const { data } = await axios.get(`/api/products${keyword}`)
    const { data } = await axios.get(
      `http://127.0.0.1:8000/api/companies/1/retrieve_favorite_employee/`
    );
    // console.log(data);
    dispatch({
      type: COMPANY_FAVORITE_EMPLOYEE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COMPANY_FAVORITE_EMPLOYEE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const companyJobsListAction = () => async (dispatch) => {
  try {
    dispatch({ type: COMPANY_JOBS_LIST_REQUEST });

    // const { data } = await axios.get(`/api/products${keyword}`)
    const { data } = await axios.get(
      `http://127.0.0.1:8000/api/companies/1/get_jobs/`
    );
    // console.log(data);
    dispatch({
      type: COMPANY_JOBS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COMPANY_JOBS_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
