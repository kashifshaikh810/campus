import {COMPANY_PROFILE} from './CompanyProfileType';

export const yourProfile = (com) => {
  return (dispatch) => {
    dispatch({type: COMPANY_PROFILE, com});
  };
};
