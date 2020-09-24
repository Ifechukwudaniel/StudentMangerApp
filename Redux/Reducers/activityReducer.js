import {
   GET_TODAY_ACTIVITY_BEGIN,
   GET_TODAY_ACTIVITY_ERROR,
   GET_TODAY_ACTIVITY_SUCCESS,
   GET_ALL_WEEK_ACTIVITY_BEGIN,
   GET_ALL_WEEK_ACTIVITY_SUCCESS, 
   GET_ALL_WEEK_ACTIVITY_ERROR
} from '../Varables'

const initialState = {
 todayActivities:[],
 weekActivities:[],
 loading:false,
 error:null,
};

export const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODAY_ACTIVITY_BEGIN:
      return {
        ...state,
        todayActivities:[],
        loading:true,
        error:null,
      };
    case GET_TODAY_ACTIVITY_SUCCESS:
        return {
          ...state,
          todayActivities:action.payload.activities,
          loading:false,
          error:null,
    };
    case GET_TODAY_ACTIVITY_ERROR:
      return {
        ...state,
        todayActivities:[],
        loading:false,
        error:action.payload.error,
      };
      case GET_ALL_WEEK_ACTIVITY_BEGIN:
        return {
          ...state,
          weekActivities:[],
          loading:true,
          error:null,
        };
      case GET_ALL_WEEK_ACTIVITY_SUCCESS:
          return {
            ...state,
            weekActivities:action.payload.activities,
            loading:false,
            error:null,
      };
      case GET_ALL_WEEK_ACTIVITY_ERROR:
        return {
          ...state,
          weekActivities:[],
          loading:false,
          error:action.payload.error,
        };
    default:
      return {...state};
  }
};