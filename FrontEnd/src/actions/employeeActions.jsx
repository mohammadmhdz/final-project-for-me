import Input from "rc-input";
import {
  EMPLOYEE_LIST_ALL_REQUEST,
  EMPLOYEE_LIST_ALL_SUCCESS,
  EMPLOYEE_LIST_ALL_FAIL,
  //
  EMPLOYEE_DETAILS_REQUEST,
  EMPLOYEE_DETAILS_SUCCESS,
  EMPLOYEE_DETAILS_FAIL,
  //
  EMPLOYEE_PORTFOLIO_DETAILS_REQUEST ,
  EMPLOYEE_PORTFOLIO_DETAILS_SUCCESS ,
  EMPLOYEE_PORTFOLIO_DETAILS_FAIL,
  //
  EMPLOYEE_FAVORITE_REQUEST,
  EMPLOYEE_FAVORITE_SUCCESS,
  EMPLOYEE_FAVORITE_FAIL,
  //
  EMPLOYEE_TOGGLE_FAVORITE_REQUEST ,
  EMPLOYEE_TOGGLE_FAVORITE_SUCCESS ,
  EMPLOYEE_TOGGLE_FAVORITE_FAIL ,
  //PUT
  EMPLOYEE_DETAILS_EDIT_REQUEST,
  EMPLOYEE_DETAILS_EDIT_SUCCESS,
  EMPLOYEE_DETAILS_EDIT_FAIL, 
  //post 
  EMPLOYEE_PORTFOLIO_POST_REQUEST ,
  EMPLOYEE_PORTFOLIO_POST_SUCCESS ,
  EMPLOYEE_PORTFOLIO_POST_FAIL, 
} from "../constant/employeeConstant";
import axios from "axios";

export const employeeListAll = () => async (dispatch) => {
  try {
    dispatch({ type:  EMPLOYEE_LIST_ALL_REQUEST });
    const { data } = await axios.get(
      `http://127.0.0.1:8000/api/employees/`
    );
    dispatch({
      type: EMPLOYEE_LIST_ALL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EMPLOYEE_LIST_ALL_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export const employeeDetails = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: EMPLOYEE_DETAILS_REQUEST });
    // console.log(keyword);
    const { data } = await axios.get(
      `http://127.0.0.1:8000/api/employees/${keyword}/`
    );
    dispatch({
      type: EMPLOYEE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EMPLOYEE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const employeePortfolioDetails = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: EMPLOYEE_PORTFOLIO_DETAILS_REQUEST });
    // console.log(keyword);
    const { data } = await axios.get(
      `http://127.0.0.1:8000/api/employees/${keyword}/get_portfolio/`
    );
    dispatch({
      type: EMPLOYEE_PORTFOLIO_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EMPLOYEE_PORTFOLIO_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const employeeFavoriteList = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: EMPLOYEE_FAVORITE_REQUEST });
    // console.log(keyword);
    const { data } = await axios.get(
      `http://127.0.0.1:8000/api/employees/${keyword}/retrieve_favorite_jobs/`
    );
    dispatch({
      type: EMPLOYEE_FAVORITE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EMPLOYEE_FAVORITE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const employeeToggleFavoriteList = (inputData , jobId) => async (dispatch) => {
  // console.log(data)
  try {
    console.log(inputData);
    dispatch({
      type: EMPLOYEE_TOGGLE_FAVORITE_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      `http://127.0.0.1:8000/api/employees/${inputData}/toggle_favorite_job/`,
      {"job_id": jobId},
      config
    );

    dispatch({
      type: EMPLOYEE_TOGGLE_FAVORITE_SUCCESS,
      payload: data,
    });

  } catch (error) {
    dispatch({
      type: EMPLOYEE_TOGGLE_FAVORITE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};


//put 
//edit freelancerSetting
export const updateEmployeeDetails = (input) => async (dispatch) => {
  console.log(input.Experiences , "input");
  // console.log(input?.company_name);
  try{
  dispatch({
        type: EMPLOYEE_DETAILS_EDIT_REQUEST,
                });
  
                const config = {
                  headers: {
                    "Content-type": "application/json",
                  },
                };
  
                const { data } = await axios.put(
                  `http://127.0.0.1:8000/api/employees/3/`,
                  // `http://127.0.0.1:8000/api/employees/${+input.id}/`,
                  
                    // user: input.user,
                    // Name: input.Name,
                    // image: null,
                    // about: input.about,
                    // founded_at: input.founded_at,
                    // city: +input.city,
                    // population: input.population,
                    // Owner_name: input.Owner_name,
                    // Email: input.Email,
                    // Website: input?.Website,
                    // facebook: input.facebook,
                    // linkdin: input.linkdin,
                    // instagram: input.instagram,
                    // Phone: input.Phone,
                    // Adress: input.Adress,
                    // Working_days_from: input.Working_days_from,
                    // Working_days_to: input.Working_days_to,
                    // working_hours_from: input.working_hours_from,
                    // working_hours_to: input.working_hours_to,
                    // active_plan: input.active_plan,
                    // available_Job_count: +input.available_Job_count,
                    {
                      user: "6",
                      perfession_title: input.perfession_title,
                      "cooperation_type": input.cooperation_type,
                      "image": null,
                      "about": input.about,
                      "gender": input.gender,
                      "city": typeof(input.city) === 'object' ? input.city.id : input.city,
                      "skills": [1, 2 , 3],
                      "cv": input.cv,
                      favorite_jobs: input.favorite_jobs,
                      work_experience: [...input.Experiences],
                      education: [...input.Education],
                      languages: [...input.Language]    
                  },
                  config
                );
              
                dispatch({
                  type: EMPLOYEE_DETAILS_EDIT_SUCCESS,
                  payload: data,
                });
              
              } catch (error) {
                dispatch({
                  type: EMPLOYEE_DETAILS_EDIT_FAIL,
                  payload:
                    error.response && error.response.data.detail
                      ? error.response.data.detail
                      : error.message,
                });
              }
              };


export const addPortofolioEmployee = (input) => async (dispatch) => {
  // console.log(input.Experiences , "input");
  console.log(input);
  try{
  dispatch({
        type: EMPLOYEE_PORTFOLIO_POST_REQUEST,
                });
  
                const config = {
                  headers: {
                    "Content-type": "application/json",
                  },
                };
  
                const { data } = await axios.post(
                  `http://localhost:8000/api/portfolio/`,
                  input,
                  config
                );
              
                dispatch({
                  type: EMPLOYEE_PORTFOLIO_POST_SUCCESS,
                  payload: data,
                });
              
              } catch (error) {
                dispatch({
                  type: EMPLOYEE_PORTFOLIO_POST_FAIL,
                  payload:
                    error.response && error.response.data.detail
                      ? error.response.data.detail
                      : error.message,
                });
              }
              };
  
