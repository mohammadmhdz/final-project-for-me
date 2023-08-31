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
  //POST
  COMPANY_VERIFICATION_REQUEST,
  COMPANY_VERIFICATION_SUCCESS,
  COMPANY_VERIFICATION_FAIL,
  // put
  COMPANY_DETAILS_UPDATE_REQUEST,
  COMPANY_DETAILS_UPDATE_SUCCESS,
  COMPANY_DETAILS_UPDATE_FAIL,
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

export const companyReviewReducer = (state = { companyReviewList: [] }, action) => {
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

export const companyFavoriteEmployeesReducer = (state = { companyFavoriteEmployeesList: [] }, action) => {
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
// put
export const companyUpdateDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case COMPANY_DETAILS_UPDATE_REQUEST:
      return { loading: true };

    case COMPANY_DETAILS_UPDATE_SUCCESS:
      return { loading: false, companyVerifyInfo: action.payload };

    case COMPANY_DETAILS_UPDATE_FAIL:
      return { loading: false, error: action.payload };


    default:
      return state;
  }
};