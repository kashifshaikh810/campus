import {YOUR_PROFILE} from '../../Actions/YourProfile/YourProfileType';

const initialState = {
  ProfileData: [],
};

const yourProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case YOUR_PROFILE:
    default:
      return state;
  }
};

export default yourProfileReducer;
