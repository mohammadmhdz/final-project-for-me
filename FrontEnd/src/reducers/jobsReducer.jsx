import {
  JOBS_LIST_REQUEST,
  JOBS_LIST_SUCCESS,
  JOBS_LIST_FAIL,
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
