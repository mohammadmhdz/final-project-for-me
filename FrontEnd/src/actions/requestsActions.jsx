import {
  FREELANCER_REQUESTS_REQUEST,
  FREELANCER_REQUESTS_SUCCESS,
  FREELANCER_REQUESTS_FAIL,
  //post
  FREELANCER_APPLY_POST_REQUEST,
  FREELANCER_APPLY_POST_SUCCESS,
  FREELANCER_APPLY_POST_FAIL,
  //PUT
  COMPANY_EDIT_APPLY_REQUEST,
  COMPANY_EDIT_APPLY_SUCCESS,
  COMPANY_EDIT_APPLY_FAIL,
  //DELETE
  COMPANY_DELETE_APPLY_REQUEST,
  COMPANY_DELETE_APPLY_SUCCESS,
  COMPANY_DELETE_APPLY_FAIL,
} from "../constant/requestsConstant";
import axios from "axios";

export const freelancerRequest = () => async (dispatch) => {
  try {
    dispatch({ type: FREELANCER_REQUESTS_REQUEST });

    // const { data } = await axios.get(`/api/products${keyword}`)
    const { data } = await axios.get(`http://127.0.0.1:8000/api/apply/`);
    // console.log(data);
    dispatch({
      type: FREELANCER_REQUESTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FREELANCER_REQUESTS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const postApply = (inputData) => async (dispatch) => {
  // console.log(data)
  try {
    // console.log(inputData , "action data");
    dispatch({
      type: FREELANCER_APPLY_POST_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      `http://127.0.0.1:8000/api/apply/`,
      {
        employee: inputData.employee,
        Company: inputData.Company,
        job: inputData.job,
        message: inputData.message,
        status: "در انتظار بررسی",
      },
      config
    );

    dispatch({
      type: FREELANCER_APPLY_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FREELANCER_APPLY_POST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const companyChangeRequestStatus = (inputData) => async (dispatch) => {
  // console.log(data)
  try {
    console.log(inputData, "action data");
    dispatch({
      type: COMPANY_EDIT_APPLY_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.put(
      `http://127.0.0.1:8000/api/apply/${inputData.id}/`,
      {
        status: inputData?.status,
        status_change_date: inputData?.status_change_date,
      },
      config
    );

    dispatch({
      type: COMPANY_EDIT_APPLY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COMPANY_EDIT_APPLY_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const deleteRequest = (keyword) => async (dispatch) => {
  // console.log(data)
  try {
    console.log(keyword, "action data");
    dispatch({
      type: COMPANY_DELETE_APPLY_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.delete(
      `http://127.0.0.1:8000/api/apply/${keyword}/`,
      config
    );

    dispatch({
      type: COMPANY_DELETE_APPLY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COMPANY_DELETE_APPLY_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
