import {
  JOBS_LIST_REQUEST,
  JOBS_LIST_SUCCESS,
  JOBS_LIST_FAIL,
  //
  JOBS_DETAIL_REQUEST,
  JOBS_DETAIL_SUCCESS,
  JOBS_DETAIL_FAIL,
} from "../constant/jobConstant";

export const jobListReducer = (state = { jobs: [] }, action) => {
  switch (action.type) {
    case JOBS_LIST_REQUEST:
      return { loading: true, jobs: [] };

    case JOBS_LIST_SUCCESS:
      return {
        loading: false,
        jobs: action.payload,
      };
    case JOBS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const jobsDetailsReducer = (state = { jobsDetails: [] }, action) => {
  switch (action.type) {
    case JOBS_DETAIL_REQUEST:
      return { loading: true, jobsDetails: [] };

    case JOBS_DETAIL_SUCCESS:
      return {
        loading: false,
        jobsDetails: action.payload,
      };
    case JOBS_DETAIL_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
