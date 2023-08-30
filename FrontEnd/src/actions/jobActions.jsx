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
    console.log(input.Company, "input");
    // console.log(input?.company_name);
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
        Company: 1,
        title: "i765645این یک تست کار است  toro khoda",
        published_at: "2023-08-29T15:47:18",
        job_type: "تمام وقت",
        isremote: true,
        city: 1,
        experience: "کمتر از ۲ سال",
        level: "intern(کاراموز)",
        salary_type: "مشخص",
        salary_amount: "12",
        description: "Job description",
        skills: [1, 2],
        category: 1,
        status: "فعال",
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
