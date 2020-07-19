import {
  GET_ATTENDANCE_BEGIN, 
  GET_ATTENDANCE_SUCCESS, 
  GET_ATTENDANCE_ERROR,
} from '../Varables'

const initialState = {
 attendance:[],
 loading:false,
 error:null,
 searchEmpty:false
};

export const attendanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ATTENDANCE_BEGIN:
      return {
        ...state,
        attendance:[],
        loading:true,
        error:null,
      };
    case GET_ATTENDANCE_SUCCESS:
        return {
          ...state,
          attendance:action.payload.attendance,
          loading:false,
          error:null,
    };
    case GET_ATTENDANCE_ERROR:
      return {
        ...state,
        attendance:[],
        loading:false,
        error:action.payload.error,
      };
    default:
      return {...state};
  }
};
