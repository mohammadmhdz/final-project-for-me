import {
  FREELANCER_REQUESTS_REQUEST,
  FREELANCER_REQUESTS_SUCCESS,
  FREELANCER_REQUESTS_FAIL,
  //post
  FREELANCER_APPLY_POST_REQUEST,
  FREELANCER_APPLY_POST_SUCCESS,
  FREELANCER_APPLY_POST_FAIL,
  //PUT
  COMPANY_EDIT_APPLY_REQUEST ,
  COMPANY_EDIT_APPLY_SUCCESS ,
  COMPANY_EDIT_APPLY_FAIL ,
  //DELETE
  COMPANY_DELETE_APPLY_REQUEST ,
  COMPANY_DELETE_APPLY_SUCCESS ,
  COMPANY_DELETE_APPLY_FAIL, 
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

export const postAplliesReducer = (
  state = { postApplyResult: [] },
  action
) => {
  switch (action.type) {
    case FREELANCER_APPLY_POST_REQUEST:
      return { loading: true, postApplyResult: [] };

    case FREELANCER_APPLY_POST_SUCCESS:
      return {
        loading: false,
        postApplyResult: action.payload,
      };
    case FREELANCER_APPLY_POST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

// delete apply
export const deleteApplyReducer  = (
  state = { deleteApplyRequest: [] },
  action
) => {
  switch (action.type) {
    case  COMPANY_DELETE_APPLY_REQUEST:
      return { loading: true, deleteApplyRequest: [] };

    case COMPANY_DELETE_APPLY_SUCCESS:
      return {
        loading: false,
        deleteApplyRequest: action.payload,
      };
    case COMPANY_DELETE_APPLY_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
// put change apply status
export const companyChangeStatusReducer = (
  state = { changeStatusArray: [] },
  action
) => {
  switch (action.type) {
    case COMPANY_EDIT_APPLY_REQUEST:
      return { loading: true, changeStatusArray: [] };

    case COMPANY_EDIT_APPLY_SUCCESS:
      return {
        loading: false,
        changeStatusArray: action.payload,
      };
    case COMPANY_EDIT_APPLY_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
