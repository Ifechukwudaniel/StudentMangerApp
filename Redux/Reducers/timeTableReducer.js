import {
  GET_TIMETABLE_BEGIN,
  GET_TIMETABLE_ERROR,
  GET_TIMETABLE_SUCCESS
} from '../Varables'

const initialState = {
  timeTable: {days:[]},
  loading:true,
  error:null,
};

export const TimeTableReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TIMETABLE_BEGIN:
      return {
        ...state,
        timeTable: {days:[]},
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
          timeTable: {days:[]},
          loading:false,
          error:action.payload.error
      };
    default:
      return {...state};
  }
};
