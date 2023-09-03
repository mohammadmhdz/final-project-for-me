import {
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  CATEGORY_LIST_FAIL,
  CATEGORY_DETAILS_UPDATE_REQUEST,
  CATEGORY_DETAILS_UPDATE_SUCCESS,
  CATEGORY_DETAILS_UPDATE_FAIL,
  CATEGORY_POST_REQUEST,
  CATEGORY_POST_SUCCESS,
  CATEGORY_POST_FAIL,
} from "../constant/adminConstant";
import axios from "axios";

export const categoryListAction = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_LIST_REQUEST });
    const { data } = await axios.get(`http://127.0.0.1:8000/api/categories/`);
    dispatch({
      type: CATEGORY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const updateCategoryDetails = (input) => async (dispatch) => {
  console.log(input, "input");
  // console.log(input?.company_name);
  try {
    dispatch({
      type: CATEGORY_DETAILS_UPDATE_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.put(
      `http://127.0.0.1:8000/api/categories/${input.id}/`,
      {
        title: input.title,
      },
      config
    );

    dispatch({
      type: CATEGORY_DETAILS_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_DETAILS_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const postCategory = (input) => async (dispatch) => {
  // console.log(input)
  try {
    console.log(input, "input");
    dispatch({
      type: CATEGORY_POST_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://127.0.0.1:8000/api/categories/",
      {
        title: input.title,
      },
      config
    );
    console.log(data);
    dispatch({
      type: CATEGORY_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_POST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
