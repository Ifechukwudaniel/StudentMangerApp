import {
    GET_TODAY_ACTIVITY_SUCCESS,
    GET_TODAY_ACTIVITY_ERROR,
    GET_TODAY_ACTIVITY_BEGIN,
    GET_ALL_WEEK_ACTIVITY_BEGIN,
    GET_ALL_WEEK_ACTIVITY_SUCCESS,
    GET_ALL_WEEK_ACTIVITY_ERROR,
    url
  } from '../Varables';
  
  import axiosService from '../../services/axiosService';
  let axios = axiosService.initInstance()
  import {AsyncStorage} from 'react-native'
import Keys from '../../constants/Keys';
  

  // toady activities 
  export const getTodayActivity = () => {
    return dispatch => {
        dispatch(getTodayActivityBegin())
        AsyncStorage.multiGet([Keys.department, Keys.level])
        .then((value)=>{
            let levelId =JSON.parse(value[1][1])._id
            axios.get(`http://${url}:3000/activity/day/${levelId}`)  // please in the name of god i made a  some bad stuff here
            .then(({data})=>setTimeout(()=>dispatch(getTodayActivitySuccess(data)), 1000))
            .catch(error=>dispatch(getTodayActivityError(error)))
        })
    };
  };
  
  const getTodayActivityBegin= ()=>({
    type:  GET_TODAY_ACTIVITY_BEGIN
  })
  
  const getTodayActivitySuccess= activities=>({
    type:  GET_TODAY_ACTIVITY_SUCCESS,
    payload:{
       activities,
    }
  })
  
  const getTodayActivityError= error=>({
    type:  GET_TODAY_ACTIVITY_ERROR,
    payload:{
       error
    }
  })
  

//  week activities 
  export const getWeekActivity = () => {
    return dispatch => {
        dispatch(getWeekActivityBegin())
        AsyncStorage.multiGet([Keys.department, Keys.level])
        .then((value)=>{
            let levelId =JSON.parse(value[1][1])._id
            axios.get(`http://${url}:3000/activity/week/${levelId}`)  // please in the name of god i made a  some bad stuff here
            .then(({data})=>setTimeout(()=>dispatch(getWeekActivitySuccess(data)), 1000))
            .catch(error=>dispatch(getWeekActivityError(error)))
        })
    };
  };

  const getWeekActivityBegin= ()=>({
    type:  GET_ALL_WEEK_ACTIVITY_BEGIN
  })
  
  const getWeekActivitySuccess= activities=>({
    type:  GET_ALL_WEEK_ACTIVITY_SUCCESS,
    payload:{
       activities,
    }
  })
  
  const getWeekActivityError= error=>({
    type:  GET_ALL_WEEK_ACTIVITY_ERROR,
    payload:{
       error
    }
  })