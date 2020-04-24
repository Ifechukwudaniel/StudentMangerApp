import {
  GET_TIMETABLE_BEGIN,
  GET_TIMETABLE_ERROR,
  GET_TIMETABLE_SUCCESS,
  SET_TIMETABLE_DAY_ACTIVE
} from '../Varables'

const initialState = {
  timeTable: [],
  loading:true,
  error:null,
  loadingAction:true
};

export const TimeTableReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TIMETABLE_BEGIN:
      return {
        ...state,
        timeTable: [],
        loading:true
      };
      case GET_TIMETABLE_SUCCESS:
        return {
          ...state,
          timeTable:action.payload.timeTable, 
          loading:false,
          error:null
      };
      case GET_TIMETABLE_ERROR:
        return {
          ...state,
          timeTable: [],
          loading:false,
          error:action.payload.error
      };
      case SET_TIMETABLE_DAY_ACTIVE:
        return {
          ...state,
          timeTable: action.payload.timeTable,
          loading:false,
          error:null
      };
    default:
      return {...state};
  }
};
