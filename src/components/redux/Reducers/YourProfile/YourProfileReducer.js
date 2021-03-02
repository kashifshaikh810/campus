import {YOUR_PROFILE} from '../../Actions/YourProfile/YourProfileType';

const initialState = {
  ProfileData: [],
};

const yourProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case YOUR_PROFILE:
      // return {
      //   ProfileData: action.pro,
      // };
      console.log('Checkeddd ', action.pro);
    default:
      return state;
  }
};

export default yourProfileReducer;
