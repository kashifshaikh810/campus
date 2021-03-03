import {USER_LOGIN} from '../../Actions/LogIn/LogInType';

const initialState = {
  LoginData: [],
};

const LogInReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      console.log('checkkkk ', action.myLog);
      return {
        LoginData: action.myLog,
      };
    default:
      return state;
  }
};

export default LogInReducer;
