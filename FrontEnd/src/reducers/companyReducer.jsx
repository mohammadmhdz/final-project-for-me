import {
  COMPANY_DETAILS_REQUEST,
  COMPANY_DETAILS_SUCCESS,
  COMPANY_DETAILS_FAIL,
} from "../constant/companyConstant";

export const companyDetailsReducer = (
  state = { companyDetails: [] },
  action
) => {
  switch (action.type) {
    case COMPANY_DETAILS_REQUEST:
      return { loading: true, companyDetails: [] };

    case COMPANY_DETAILS_SUCCESS:
      return {
        loading: false,
        companyDetails: action.payload,
      };
    case COMPANY_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
