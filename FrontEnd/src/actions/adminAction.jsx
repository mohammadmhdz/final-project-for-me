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
  CATEGORY_DELETE_REQUEST,
  CATEGORY_DELETE_SUCCESS,
  CATEGORY_DELETE_FAIL,
  SKILL_LIST_REQUEST,
  SKILL_LIST_SUCCESS,
  SKILL_LIST_FAIL,
  SKILL_DETAILS_UPDATE_REQUEST,
  SKILL_DETAILS_UPDATE_SUCCESS,
  SKILL_DETAILS_UPDATE_FAIL,
  SKILL_POST_REQUEST,
  SKILL_POST_SUCCESS,
  SKILL_POST_FAIL,
  SKILL_DELETE_REQUEST,
  SKILL_DELETE_SUCCESS,
  SKILL_DELETE_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
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

export const deletecategory = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CATEGORY_DELETE_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.delete(
      `http://127.0.0.1:8000/api/categories/${id}/`,
      config
    );

    dispatch({
      type: CATEGORY_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_DELETE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const skillListAction = () => async (dispatch) => {
  try {
    dispatch({ type: SKILL_LIST_REQUEST });
    const { data } = await axios.get(`http://127.0.0.1:8000/api/skills/`);
    dispatch({
      type: SKILL_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SKILL_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const updateSkillDetails = (input) => async (dispatch) => {
  try {
    dispatch({
      type: SKILL_DETAILS_UPDATE_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.put(
      `http://127.0.0.1:8000/api/skills/${input.id}/`,
      {
        title: input.title,
      },
      config
    );

    dispatch({
      type: SKILL_DETAILS_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SKILL_DETAILS_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const createSkill = (input) => async (dispatch) => {
  try {
    dispatch({
      type: SKILL_POST_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://127.0.0.1:8000/api/skills/",
      {
        title: input.title,
      },
      config
    );

    dispatch({
      type: SKILL_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SKILL_POST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const deleteSkill = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SKILL_DELETE_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.delete(
      `http://127.0.0.1:8000/api/skills/${id}/`,

      config
    );

    dispatch({
      type: SKILL_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: SKILL_DELETE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const deleteuser = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_USER_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.delete(
      `http://127.0.0.1:8000/api/users/${id}/`,

      config
    );

    dispatch({
      type: DELETE_USER_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: DELETE_USER_FAILURE,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
