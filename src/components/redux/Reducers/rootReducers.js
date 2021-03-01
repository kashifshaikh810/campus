import {combineReducers} from 'redux';
import applyJobReducer from '../Reducers/ApplyJobsReducer/ApplyJobsReducer';
import yourProfileReducer from '../Reducers/YourProfile/YourProfileReducer';

const rootReducer = combineReducers({
  job: applyJobReducer,
  pro: yourProfileReducer,
});

export default rootReducer;
