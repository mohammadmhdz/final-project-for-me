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
  // mhdz
  JOBS_EDIT_DETAILS_REQUEST,
  JOBS_EDIT_DETAILS_SUCCESS,
  JOBS_EDIT_DETAILS_FAIL,
  // update
  JOB_DETAILS_UPDATE_REQUEST,
  JOB_DETAILS_UPDATE_SUCCESS,
  JOB_DETAILS_UPDATE_FAIL,
  //
  JOB_DELETE_REQUEST,
  JOB_DELETE_SUCCESS,
  JOB_DELETE_FAIL,
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

export const jobsPostRequirmentsReducer = (
  state = { postJobDetailsRequirments: [] },
  action
) => {
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

export const jobDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case JOB_DELETE_REQUEST:
      return { loading: true };

    case JOB_DELETE_SUCCESS:
      return { loading: false, success: true };

    case JOB_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const jobEditDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case JOBS_EDIT_DETAILS_REQUEST:
      return { loading: true };

    case JOBS_EDIT_DETAILS_SUCCESS:
      return { loading: false, editJobDetailsResult: action.payload };

    case JOBS_EDIT_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const jobUpdateDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case JOB_DETAILS_UPDATE_REQUEST:
      return { loading: true };

    case JOB_DETAILS_UPDATE_SUCCESS:
      return { loading: false, categoryUpdateSuccesfull: action.payload };

    case JOB_DETAILS_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
