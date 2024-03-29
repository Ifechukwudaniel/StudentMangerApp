import {
 GET_ALL_DEPARTMENTS_BEGIN,
 GET_ALL_DEPARTMENTS_SUCCESS,
 GET_ALL_DEPARTMENTS_ERROR,
 SET_FILTER_DEPARTMENTS,
 url
} from '../Varables';

import axiosService from '../../services/axiosService';
let axios = axiosService.initInstance()

export const getAllDepartment = (data) => {
  return dispatch => {
    dispatch( getAllDepartmentBegin())
    return axios.get(`http://${url}:3000/department/`)
    .then(({data})=>{
      setTimeout(()=> dispatch(getAllDepartmentSuccess(data)), 1000)
    })
    .catch((error)=>{
       dispatch(getAllDepartmentError(error))
    })
  };
};

const getAllDepartmentBegin= ()=>({
  type:GET_ALL_DEPARTMENTS_BEGIN
})

const getAllDepartmentSuccess= (departments)=>({
  type:GET_ALL_DEPARTMENTS_SUCCESS,
  payload:{
    departments,
  }
})

const getAllDepartmentError= error=>({
  type:GET_ALL_DEPARTMENTS_ERROR,
  payload:{
     error
  }
})

 export const setFilterDepartments = filterDepartments =>({
  type:SET_FILTER_DEPARTMENTS,
  payload:{
    filterDepartments,
  } 
})