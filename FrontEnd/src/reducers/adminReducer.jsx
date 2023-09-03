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
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
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

export const categoryPostRedducer = (
  state = { categoryPostList: [] },
  action
) => {
  switch (action.type) {
    case CATEGORY_POST_REQUEST:
      return { loading: true, categoryPostList: [] };

    case CATEGORY_POST_SUCCESS:
      return {
        loading: false,
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
    case PRODUCT_DELETE_REQUEST:
      return { loading: true };

    case PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true };

    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
