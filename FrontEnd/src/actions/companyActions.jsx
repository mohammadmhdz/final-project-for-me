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
  //
  COMPANY_POST_REVIEW_REQUEST,
  COMPANY_POST_REVIEW_SUCCESS,
  COMPANY_POST_REVIEW_FAIL,
  // PUT
  COMPANY_DETAILS_UPDATE_REQUEST,
  COMPANY_DETAILS_UPDATE_SUCCESS,
  COMPANY_DETAILS_UPDATE_FAIL
} from "../constant/companyConstant";
import axios from "axios";

export const companyDetails = (keyword) => async (dispatch) => {
  console.log(keyword);
  try {
    dispatch({ type: COMPANY_DETAILS_REQUEST });

    // const { data } = await axios.get(`/api/products${keyword}`)
    const { data } = await axios.get(`http://127.0.0.1:8000/api/companies/${keyword}`);
    dispatch({
      type: COMPANY_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COMPANY_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const companyReviewGet = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: COMPANY_REVIEWS_REQUEST });
    
    // const { data } = await axios.get(`/api/products${keyword}`)
    const { data } = await axios.get(
      `http://127.0.0.1:8000/api/companies/${keyword}/get_reviews/`
      );
      // console.log(data);
      dispatch({
        type: COMPANY_REVIEWS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: COMPANY_REVIEWS_FAIL,
        payload:
        error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
      });
    }
  };
  
  export const companyFavoriteEmployees = (keyword) => async (dispatch) => {
    try {
      dispatch({ type: COMPANY_FAVORITE_EMPLOYEE_REQUEST });
      
      // const { data } = await axios.get(`/api/products${keyword}`)
      const { data } = await axios.get(
        `http://127.0.0.1:8000/api/companies/${keyword}/retrieve_favorite_employee/`
        );
        // console.log(data);
        dispatch({
          type: COMPANY_FAVORITE_EMPLOYEE_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: COMPANY_FAVORITE_EMPLOYEE_FAIL,
          payload:
          error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
        });
      }
    };
    
    export const companyJobsListAction = (keyword) => async (dispatch) => {
      try {
        dispatch({ type: COMPANY_JOBS_LIST_REQUEST });
        
        // const { data } = await axios.get(`/api/products${keyword}`)
        const { data } = await axios.get(
          `http://127.0.0.1:8000/api/companies/${keyword}/get_jobs/`
          );
          // console.log(data);
          dispatch({
            type: COMPANY_JOBS_LIST_SUCCESS,
            payload: data,
          });
        } catch (error) {
          dispatch({
            type: COMPANY_JOBS_LIST_FAIL,
            payload:
            error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
          });
        }
      };
      
      // POST DATA
      export const  companyVerification = (input) => async (dispatch) => {
        try {
          console.log(input?.company_verfication_id);
          console.log(input?.company_name);
          dispatch({
            type: COMPANY_VERIFICATION_REQUEST,
          });
          
          const config = {
            headers: {
              "Content-type": "multipart/form-data",
            },
          };
          
          const { data } = await axios.post(
            "http://127.0.0.1:8000/api/verification/",
            { Company : input?.company_name ,
              registrationـnumber: input?.company_verfication_id ,
              registration_file : input?.company_file ,
              status: true},
              config
              );
              
              dispatch({
                type: COMPANY_VERIFICATION_SUCCESS,
                payload: data,
              });
              
            } catch (error) {
              dispatch({
                type: COMPANY_VERIFICATION_FAIL,
                payload:
                error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
              });
            }}

      export const  postReview = (input) => async (dispatch) => {
        try {
          console.log(input)
          
          dispatch({
            type:   COMPANY_POST_REVIEW_REQUEST,
          });
          
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          };
          
          const { data } = await axios.post(
            "http://127.0.0.1:8000/api/reviews/",
            input,
              config
              );
              
              dispatch({
                type:   COMPANY_POST_REVIEW_SUCCESS,
                payload: data,
              });
              
            } catch (error) {
              dispatch({
                type:   COMPANY_POST_REVIEW_FAIL,
                payload:
                error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
              });
            }}

// update using PUT
export const updateCompanyDetails = (input) => async (dispatch) => {
console.log(input , "input");
// console.log(input?.company_name);
try{
dispatch({
      type: COMPANY_DETAILS_UPDATE_REQUEST,
              });

              const config = {
                headers: {
                  "Content-type": "application/json",
                },
              };

              const { data } = await axios.put(
                `http://127.0.0.1:8000/api/companies/${input.id}/`,
                {
                  user: input.user,
                  Name: input.Name,
                  image: null,
                  about: input.about,
                  founded_at: input.founded_at,
                  city: +input.city,
                  population: input.population,
                  Owner_name: input.Owner_name,
                  Email: input.Email,
                  Website: input?.Website,
                  facebook: input.facebook,
                  linkdin: input.linkdin,
                  instagram: input.instagram,
                  Phone: input.Phone,
                  Adress: input.Adress,
                  Working_days_from: input.Working_days_from,
                  Working_days_to: input.Working_days_to,
                  working_hours_from: input.working_hours_from,
                  working_hours_to: input.working_hours_to,
                  active_plan: input.active_plan,
                  available_Job_count: +input.available_Job_count,
                },
                config
              );
            
              dispatch({
                type: COMPANY_DETAILS_UPDATE_SUCCESS,
                payload: data,
              });
            
            } catch (error) {
              dispatch({
                type: COMPANY_DETAILS_UPDATE_FAIL,
                payload:
                  error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
              });
            }
            };
