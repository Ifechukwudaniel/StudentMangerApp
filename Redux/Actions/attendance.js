import {
  GET_ATTENDANCE_BEGIN,
  GET_ATTENDANCE_ERROR,
  GET_ATTENDANCE_SUCCESS,
  url
  } from '../Varables';
  
  import axiosService from '../../services/axiosService';
  let axios = axiosService.initInstance()
  
  export const getAttendance = () => {
    return dispatch => {
        dispatch(getAttendanceBegin())
             axios.get(`http://${url}:3000/attendance/`)
             .then(({data})=>{
                setTimeout(()=> dispatch(getAttendanceSuccess(data)), 2000)
             })
             .catch(error=>{
             dispatch(getAttendanceError(error))
             })
    };
  };
  
  const getAttendanceBegin= ()=>({
    type:GET_ATTENDANCE_BEGIN
  })
  
  const getAttendanceSuccess= attendance=>({
    type:GET_ATTENDANCE_SUCCESS,
    payload:{
       attendance,
    }
  })
  
  const getAttendanceError= error=>({
    type:GET_ATTENDANCE_ERROR,
    payload:{
       error
    }
  })
  