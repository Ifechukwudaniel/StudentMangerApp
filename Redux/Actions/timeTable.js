import {
  GET_TIMETABLE_BEGIN,
  GET_TIMETABLE_SUCCESS,
  GET_TIMETABLE_ERROR,
  SET_TIMETABLE_DAY_ACTIVE,
  SET_TIMETABLE_DAYACTION,
  SET_DATE,
  SET_TIMETABLE_DAYACTION_START
  } from '../Varables';
  
import axiosService from '../../services/axiosService';
import { AsyncStorage } from 'react-native';
import Keys from '../../constants/Keys';
import moment from 'moment';
let axios = axiosService.initInstance()
import _ from 'lodash'
import util from '../../util';
  
  export const getTimeTable = () => {
    return dispatch => {
        dispatch(getTimeTableBegin())
           AsyncStorage.getItem(Keys.level)
           .then((data)=>{
             const level=  JSON.parse(data)
             axios.get(`http://localhost:3000/timetable/${level._id}`)
              .then(({data})=>{
                AsyncStorage.setItem(Keys.timeTable,JSON.stringify(data))
                .then(()=>{
                   const newTimeTable = util.convertTimeTable(data)
                   const todayAction=  _.find(newTimeTable,{active:true}).dayActions
                   setTimeout(()=>{
                       dispatch(getTimeTableSuccess(newTimeTable))
                       dispatch(setDayActions(todayAction))
                   },1000)
                })
              })
              .catch(error=>{
                 console.log(error)
                 AsyncStorage.getItem(Keys.timeTable)
                 .then((data)=>{
                     let timeTable = JSON.parse(data)
                     setTimeout(()=> dispatch(getTimeTableSuccess(util.convertTimeTable(timeTable))), 1000)
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


 export const setTimeTableActiveDay= timeTable=>({
    type:SET_TIMETABLE_DAY_ACTIVE,
    payload:{
       timeTable,
    }
  })


  export const setDayActions= dayActions=>({
    type:SET_TIMETABLE_DAYACTION,
    payload:{
       dayActions,
    }
  })

  export const setDayActionsStart= ()=>({
    type:SET_TIMETABLE_DAYACTION_START,
  })

  export const setDate= date=>({
    type:SET_DATE,
    payload:{
       date,
    }
  })

