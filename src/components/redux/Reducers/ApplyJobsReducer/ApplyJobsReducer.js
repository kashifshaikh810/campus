import {APPLY_JOB} from '../../Actions/ApplyJobs/ApplyJobsTypes';

const initialState = {
  applyJobs: [
    {
      jobTitle:
        'Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, ',
      salaryPackage:
        'when he reached the Father Superiors with Ivan: he felt ashamed of havin lost his temper',
      requirement:
        'He felt that he ought to have disdaimed that despicable wretch, Fyodor Pavlovitch, too ',
      experience:
        'wretch, Fyodor Pavlovitch, too m in Father Zossimas cell, and so to have forgotten ',
      designation: 'fnghfnhfbfgbfgbfg',
      description: 'gfdgfdgfdgfdgfdfgfgd',
    },
    {
      jobTitle:
        'himself. "Teh monks were not to blame, in any case," he reflceted, on the steps. "And if',
      salaryPackage:
        'be friendly and courteous withthem? I wont argue Ill fall in with everything, Ill win ',
      requirement:
        'that Pierrot, and have merely been takken in over this affair, just as they have."',
      experience: 'fnghfnhfbfgbfgbfg',
      designation: 'fnghfnhfbfgbfgbfg',
      description: 'sdddddddddddd',
    },
    {
      jobTitle:
        'These excellant intentions were strengthed when he enterd the Father Superiors diniing-',
      salaryPackage:
        'room, though, stricttly speakin, it was not a dining-room, for the Father Superior had only ',
      requirement: 'dsadsa',
      experience:
        'superior had only ltogether; they were, however, much larger and more comfortable than ',
      designation: 'fnghfnhfbfgbfgbfg',
      description: 'cccccccchhhhhhhhhhhhh',
    },
    {
      jobTitle: 'ifsudhifdsfi',
      salaryPackage:
        'service shone; there were three kinds of well-baked bread, two bottles of wine, two of ',
      requirement: 'dsadsa',
      experience: 'dsadsaddsad',
      designation: 'fnghfnhfbfgbfgbfg',
      description: 'dsadsadsadadddddddddddddddddddsadsad',
    },
  ],
};

const applyJobReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPLY_JOB:
      console.log('check ', action.job);
    default:
      return state;
  }
};

export default applyJobReducer;
