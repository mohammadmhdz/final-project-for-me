import {
  COMPANY_DETAILS_REQUEST,
  COMPANY_DETAILS_SUCCESS,
  COMPANY_DETAILS_FAIL,
} from "../constant/companyConstant";
import axios from "axios";

export const companyDetails = () => async (dispatch) => {
  try {
    dispatch({ type: COMPANY_DETAILS_REQUEST });

    // const { data } = await axios.get(`/api/products${keyword}`)
    const { data } = await axios.get(`http://127.0.0.1:8000/api/companies/2`);
    // console.log(data);
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
