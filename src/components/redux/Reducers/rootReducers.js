import {combineReducers} from 'redux';
import applyJobReducer from '../Reducers/ApplyJobsReducer/ApplyJobsReducer';

const rootReducer = combineReducers({
  job: applyJobReducer,
});

export default rootReducer;
