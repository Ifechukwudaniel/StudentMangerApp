import {
  GET_TIMETABLE_BEGIN,
  GET_TIMETABLE_SUCCESS,
  GET_TIMETABLE_ERROR,
  } from '../Varables';
  
import axiosService from '../../services/axiosService';
import { AsyncStorage } from 'react-native';
import Keys from '../../constants/Keys';
import moment from 'moment';
  let axios = axiosService.initInstance()
  
  export const getTimeTable = () => {
    return dispatch => {
        dispatch(getTimeTableBegin())
           AsyncStorage.getItem(Keys.level)
           .then((data)=>{
             const level=  JSON.parse(data)
             axios.get(`http://localhost:3000/timetable/${level._id}`)
              .then(({data})=>{
                AsyncStorage.setItem(Keys.timeTable,JSON.stringify(data))
                .then(()=>dispatch(getTimeTableSuccess(data)))
              })
              .catch(error=>{
                 AsyncStorage.getItem(Keys.timeTable)
                 .then((data)=>{
                     dispatch(getTimeTableSuccess(JSON.parse(data)))
                 })
                 .catch(()=> dispatch(getTimeTableError(error)))
              })
           })
    };
  };
  
  const getTimeTableBegin= ()=>({
    type:GET_TIMETABLE_BEGIN
  })
  
  const getTimeTableSuccess= timeTable=>({
    type:GET_TIMETABLE_SUCCESS,
    payload:{
       timeTable,
    }
  })
  
  const getTimeTableError= error=>({
    type:GET_TIMETABLE_ERROR,
    payload:{
       error
    }
  })
  