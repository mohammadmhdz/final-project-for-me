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
  // update
  JOB_DETAILS_UPDATE_REQUEST,
  JOB_DETAILS_UPDATE_SUCCESS,
  JOB_DETAILS_UPDATE_FAIL,
  //
  JOB_DELETE_REQUEST,
  JOB_DELETE_SUCCESS,
  JOB_DELETE_FAIL,
} from "../constant/jobConstant";
import axios from "axios";

export const listJobs = () => async (dispatch) => {
  try {
    dispatch({ type: JOBS_LIST_REQUEST });

    // const { data } = await axios.get(`/api/products${keyword}`)
    const { data } = await axios.get(`http://127.0.0.1:8000/api/jobs/`);
    // console.log(data);
    dispatch({
      type: JOBS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: JOBS_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const jobsDetail = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: JOBS_DETAIL_REQUEST });
    console.log(typeof keyword, "keyword");
    // const { data } = await axios.get(`/api/products${keyword}`)
    const { data } = await axios.get(
      `http://127.0.0.1:8000/api/jobs/${keyword}/`
    );
    // console.log(data);
    dispatch({
      type: JOBS_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: JOBS_DETAIL_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const jobsPostRequirments = () => async (dispatch) => {
  try {
    dispatch({ type: JOBS_POST_REQUIREMENTS_REQUEST });

    // const { data } = await axios.get(`/api/products${keyword}`)
    const { data } = await axios.get(`http://127.0.0.1:8000/api/dropdown/`);
    // console.log(data);
    dispatch({
      type: JOBS_POST_REQUIREMENTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: JOBS_POST_REQUIREMENTS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

// POST
export const postJob = (input) => async (dispatch) => {
  // console.log(input)
  try {
    console.log(input, "input");
    dispatch({
      type: JOBS_POST_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://127.0.0.1:8000/api/jobs/",
      {
        Company: input?.Company,
        title: input?.title,
        published_at: input?.published_at,
        job_type: input?.job_type,
        isremote: input?.isremote,
        city: +input?.city, // change it to int using +
        experience: input?.experience,
        level: input?.level,
        salary_type: input?.salary_type,
        salary_amount: input?.salary_amount,
        description: input?.description,
        skills: [...input?.skills],
        category: +input?.category, // change it to int using +
        status: input?.status,
      },
      config
    );
    console.log(data);
    dispatch({
      type: JOBS_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: JOBS_POST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const updateJobDetails = (input) => async (dispatch) => {
  console.log(input, "input");
  // console.log(input?.company_name);
  try {
    dispatch({
      type: JOB_DETAILS_UPDATE_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.put(
      `http://127.0.0.1:8000/api/jobs/${input.id}/`,
      {
        title: input.title,
        status: input.status,
      },
      config
    );

    dispatch({
      type: JOB_DETAILS_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: JOB_DETAILS_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const deletejob = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: JOB_DELETE_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.delete(
      `http://127.0.0.1:8000/api/jobs/${id}/`,
      config
    );

    dispatch({
      type: JOB_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: JOB_DELETE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
