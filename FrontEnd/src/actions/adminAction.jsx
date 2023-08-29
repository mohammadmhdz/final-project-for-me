import 
{CATEGORY_LIST_REQUEST,
CATEGORY_LIST_SUCCESS,
CATEGORY_LIST_FAIL,
}from "../constant/adminConstant"
import axios from "axios";

export const categoryListAction = (keyword) => async (dispatch) => {
    try {
      dispatch({ type: CATEGORY_LIST_REQUEST });
      const { data } = await axios.get(
        `http://127.0.0.1:8000/api/categories/`
      );
      // console.log(data);
      dispatch({
        type: CATEGORY_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CATEGORY_LIST_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };