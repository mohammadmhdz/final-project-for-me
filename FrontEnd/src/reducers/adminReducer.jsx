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
  REVIEW_LIST_REQUEST,
  REVIEW_LIST_SUCCESS,
  REVIEW_LIST_FAIL,
  REVIEW_DETAILS_UPDATE_REQUEST,
  REVIEW_DETAILS_UPDATE_SUCCESS,
  REVIEW_DETAILS_UPDATE_FAIL,
} from "../constant/adminConstant";

export const categoryListReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case CATEGORY_LIST_REQUEST:
      return { loading: true, categories: [] };

    case CATEGORY_LIST_SUCCESS:
      return {
        loading: false,
        categories: action.payload,
      };
    case CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const categoryUpdateDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_DETAILS_UPDATE_REQUEST:
      return { loading: true };

    case CATEGORY_DETAILS_UPDATE_SUCCESS:
      return { loading: false, categoryUpdateSuccesfull: action.payload };

    case CATEGORY_DETAILS_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const categoryPost = (state = { categoryPostList: [] }, action) => {
  switch (action.type) {
    case CATEGORY_POST_REQUEST:
      return { loading: true, categoryPostList: [] };

    case CATEGORY_POST_SUCCESS:
      return {
        loading: false,
        success: true,
        categoryPostList: action.payload,
      };
    case CATEGORY_POST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const categoryDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_DELETE_REQUEST:
      return { loading: true };

    case CATEGORY_DELETE_SUCCESS:
      return { loading: false, success: true };

    case CATEGORY_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const skillListReducer = (state = { skills: [] }, action) => {
  switch (action.type) {
    case SKILL_LIST_REQUEST:
      return { loading: true, skills: [] };

    case SKILL_LIST_SUCCESS:
      return {
        loading: false,
        skills: action.payload,
      };
    case SKILL_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const skillUpdateDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case SKILL_DETAILS_UPDATE_REQUEST:
      return { loading: true };

    case SKILL_DETAILS_UPDATE_SUCCESS:
      return { loading: false, skillUpdateSuccessful: action.payload };

    case SKILL_DETAILS_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const skillPostReducer = (state = { skillPostList: [] }, action) => {
  switch (action.type) {
    case SKILL_POST_REQUEST:
      return { loading: true, skillPostList: [] };

    case SKILL_POST_SUCCESS:
      return {
        loading: false,
        success: true,
        skillPostList: action.payload,
      };
    case SKILL_POST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const skillDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case SKILL_DELETE_REQUEST:
      return { loading: true };

    case SKILL_DELETE_SUCCESS:
      return { loading: false, success: true };

    case SKILL_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_USER_REQUEST:
      return { loading: true };

    case DELETE_USER_SUCCESS:
      return { loading: false, success: true };

    case DELETE_USER_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const reviewListReducer = (state = { reviews: [] }, action) => {
  switch (action.type) {
    case REVIEW_LIST_REQUEST:
      return { loading: true, reviews: [] };

    case REVIEW_LIST_SUCCESS:
      return {
        loading: false,
        reviews: action.payload,
      };
    case REVIEW_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const reviewUpdateDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case REVIEW_DETAILS_UPDATE_REQUEST:
      return { loading: true };

    case REVIEW_DETAILS_UPDATE_SUCCESS:
      return { loading: false, reviewUpdateSuccesfull: action.payload };

    case REVIEW_DETAILS_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
