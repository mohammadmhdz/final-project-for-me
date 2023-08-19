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
} from "../constant/companyConstant";

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
        companyDetail: action.payload,
      };
    case COMPANY_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const companyReviewReducer = (state = { companyReview: [] }, action) => {
  switch (action.type) {
    case COMPANY_REVIEWS_REQUEST:
      return { loading: true, companyReview: [] };

    case COMPANY_REVIEWS_SUCCESS:
      return {
        loading: false,
        companyReview: action.payload,
      };
    case COMPANY_REVIEWS_FAIL:
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
