import {
  GET_TIMETABLE_BEGIN,
  GET_TIMETABLE_ERROR,
  GET_TIMETABLE_SUCCESS,
  SET_TIMETABLE_DAY_ACTIVE,
  SET_TIMETABLE_DAYACTION,
  SET_DATE,
  SET_TIMETABLE_DAYACTION_START
} from '../Varables'

const initialState = {
  timeTable: [],
  loading:true,
  error:null,
  loadingAction:true,
  dayActions:[],
  date:"Today"
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
      case  SET_TIMETABLE_DAYACTION :{
          return {
            ...state,
            dayActions: action.payload.dayActions,
            loadingAction:false,
          } 
      }
      case  SET_TIMETABLE_DAYACTION_START :{
        return {
          ...state,
          dayActions: [],
          loadingAction:true,
        } 
    }
      case  SET_DATE :{
        return {
          ...state,
          date:action.payload.date
        } 
    }
      
    default:
      return {...state};
  }
};
