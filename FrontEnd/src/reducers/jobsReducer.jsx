import {
  JOBS_LIST_REQUEST,
  JOBS_LIST_SUCCESS,
  JOBS_LIST_FAIL,
  //
  JOBS_DETAIL_REQUEST,
  JOBS_DETAIL_SUCCESS,
  JOBS_DETAIL_FAIL,
  //
  JOBS_POST_REQUIREMENTS_REQUEST,
  JOBS_POST_REQUIREMENTS_SUCCESS,
  JOBS_POST_REQUIREMENTS_FAIL,
  //POST
  JOBS_POST_REQUEST,
  JOBS_POST_SUCCESS,
  JOBS_POST_FAIL,
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

export const jobsDetailsReducer = (state = { jobsDetailsList: [] }, action) => {
  switch (action.type) {
    case JOBS_DETAIL_REQUEST:
      return { loading: true, jobsDetailsList: [] };

    case JOBS_DETAIL_SUCCESS:
      return {
        loading: false,
        jobsDetailsList: action.payload,
      };
    case JOBS_DETAIL_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const jobsPostRequirmentsReducer = (state = { postJobDetailsRequirments: [] }, action) => {
  switch (action.type) {
    case JOBS_POST_REQUIREMENTS_REQUEST:
      return { loading: true, postJobDetailsRequirments: [] };

    case JOBS_POST_REQUIREMENTS_SUCCESS:
      return {
        loading: false,
        postJobDetailsRequirments: action.payload,
      };
    case JOBS_POST_REQUIREMENTS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
// post
export const jobsPostRedducer = (state = { jobsPostList: [] }, action) => {
  switch (action.type) {
    case JOBS_POST_REQUEST:
      return { loading: true, jobsPostList: [] };

    case JOBS_POST_SUCCESS:
      return {
        loading: false,
        jobsPostList: action.payload,
      };
    case JOBS_POST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
