import {
  FREELANCER_REQUESTS_REQUEST,
  FREELANCER_REQUESTS_SUCCESS,
  FREELANCER_REQUESTS_FAIL,
} from "../constant/requestsConstant";

export const freelancerRequestReducer = (
  state = { freelancerRequestsAll: [] },
  action
) => {
  switch (action.type) {
    case FREELANCER_REQUESTS_REQUEST:
      return { loading: true, freelancerRequestsAll: [] };

    case FREELANCER_REQUESTS_SUCCESS:
      return {
        loading: false,
        freelancerRequestsAll: action.payload,
      };
    case FREELANCER_REQUESTS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
