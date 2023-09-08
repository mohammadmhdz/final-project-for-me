import {
  COMPANY_LIST_REQUEST,
  COMPANY_LIST_SUCCESS,
  COMPANY_LIST_FAIL,
  //
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
  COMPANY_FAVORITE_EMPLOYEE_REQUEST,
  COMPANY_FAVORITE_EMPLOYEE_SUCCESS,
  COMPANY_FAVORITE_EMPLOYEE_FAIL,
  //POST
  COMPANY_VERIFICATION_REQUEST,
  COMPANY_VERIFICATION_SUCCESS,
  COMPANY_VERIFICATION_FAIL,
  //
  COMPANY_POST_REVIEW_REQUEST,
  COMPANY_POST_REVIEW_SUCCESS,
  COMPANY_POST_REVIEW_FAIL,
  //
  COMPANY_TOGGLE_FAVORITE_REQUEST,
  COMPANY_TOGGLE_FAVORITE_SUCCESS,
  COMPANY_TOGGLE_FAVORITE_FAIL,
  // put
  COMPANY_DETAILS_UPDATE_REQUEST,
  COMPANY_DETAILS_UPDATE_SUCCESS,
  COMPANY_DETAILS_UPDATE_FAIL,
  //
  COMPANY_DELETE_REQUEST,
  COMPANY_DELETE_SUCCESS,
  COMPANY_DELETE_FAIL,
  //
  COMPANY_GALLERY_LIST_REQUEST,
  COMPANY_GALLERY_LIST_SUCCESS,
  COMPANY_GALLERY_LIST_FAIL,
} from "../constant/companyConstant";

export const companyListReducer = (state = { compnanies: [] }, action) => {
  switch (action.type) {
    case COMPANY_LIST_REQUEST:
      return { loading: true, compnanies: [] };

    case COMPANY_LIST_SUCCESS:
      return {
        loading: false,
        compnanies: action.payload,
      };

    case COMPANY_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const companyDetailsReducer = (
  state = { companyDetail: [] },
  action
) => {
  switch (action.type) {
    case COMPANY_DETAILS_REQUEST:
      return { loading: true, companyDetail: [] };

    case COMPANY_DETAILS_SUCCESS:
      return {
        loading: false,
        success: true,
        companyDetail: action.payload,
      };
    case COMPANY_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const companyReviewReducer = (
  state = { companyReviewList: [] },
  action
) => {
  switch (action.type) {
    case COMPANY_REVIEWS_REQUEST:
      return { loading: true, companyReviewList: [] };

    case COMPANY_REVIEWS_SUCCESS:
      return {
        loading: false,
        companyReviewList: action.payload,
      };
    case COMPANY_REVIEWS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const companyFavoriteEmployeesReducer = (
  state = { companyFavoriteEmployeesList: [] },
  action
) => {
  switch (action.type) {
    case COMPANY_FAVORITE_EMPLOYEE_REQUEST:
      return { loading: true, companyFavoriteEmployeesList: [] };

    case COMPANY_FAVORITE_EMPLOYEE_SUCCESS:
      return {
        loading: false,
        companyFavoriteEmployeesList: action.payload,
      };
    case COMPANY_FAVORITE_EMPLOYEE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const companyJobsListReducer = (
  state = { companyJobsListArray: [] },
  action
) => {
  switch (action.type) {
    case COMPANY_JOBS_LIST_REQUEST:
      return { loading: true, companyJobsListArray: [] };

    case COMPANY_JOBS_LIST_SUCCESS:
      return {
        loading: false,
        companyJobsListArray: action.payload,
      };
    case COMPANY_JOBS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const companygalleryListReducer = (
  state = { companygalleryListArray: [] },
  action
) => {
  switch (action.type) {
    case COMPANY_GALLERY_LIST_REQUEST:
      return { loading: true, companygalleryListArray: [] };

    case COMPANY_GALLERY_LIST_SUCCESS:
      return {
        loading: false,
        companygalleryListArray: action.payload,
      };
    case COMPANY_GALLERY_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

//POST
export const companyVerifyReducer = (state = {}, action) => {
  switch (action.type) {
    case COMPANY_VERIFICATION_REQUEST:
      return { loading: true };

    case COMPANY_VERIFICATION_SUCCESS:
      return { loading: false, companyVerifyInfo: action.payload };

    case COMPANY_VERIFICATION_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const postReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case COMPANY_POST_REVIEW_REQUEST:
      return { loading: true };

    case COMPANY_POST_REVIEW_SUCCESS:
      return { loading: false, postDataArray: action.payload };

    case COMPANY_POST_REVIEW_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const companyToggleFavoriteListReducer = (state = {}, action) => {
  switch (action.type) {
    case COMPANY_TOGGLE_FAVORITE_REQUEST:
      return { loading: true };

    case COMPANY_TOGGLE_FAVORITE_SUCCESS:
      return {
        loading: false,
        success: true,
        toggleFavoriteResult: action.payload,
      };

    case COMPANY_TOGGLE_FAVORITE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
// put
export const companyUpdateDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case COMPANY_DETAILS_UPDATE_REQUEST:
      return { loading: true };

    case COMPANY_DETAILS_UPDATE_SUCCESS:
      return { loading: false, companyUpdateSuccesfull: action.payload };

    case COMPANY_DETAILS_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const companyDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case COMPANY_DELETE_REQUEST:
      return { loading: true };

    case COMPANY_DELETE_SUCCESS:
      return { loading: false, success: true };

    case COMPANY_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
