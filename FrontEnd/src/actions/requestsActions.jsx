import {
  FREELANCER_REQUESTS_REQUEST,
  FREELANCER_REQUESTS_SUCCESS,
  FREELANCER_REQUESTS_FAIL,
} from "../constant/requestsConstant";
import axios from "axios";

// http://localhost:8081/template-reactjs/freelancer-dashboard
export const freelancerRequest = () => async (dispatch) => {
  try {
    dispatch({ type: FREELANCER_REQUESTS_REQUEST });

    // const { data } = await axios.get(`/api/products${keyword}`)
    const { data } = await axios.get(`http://127.0.0.1:8000/api/apply/`);
    // console.log(data);
    dispatch({
      type: FREELANCER_REQUESTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FREELANCER_REQUESTS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
