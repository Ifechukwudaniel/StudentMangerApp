import {
 GET_MATERIALS_BEGIN,
 GET_MATERIALS_ERROR,
 GET_MATERIALS_SUCCESS,
 } from '../Varables';
 
 import axiosService from '../../services/axiosService';
 import {AsyncStorage} from 'react-native'
import Keys from '../../constants/Keys';
 let axios = axiosService.initInstance()
 
 export const getMaterials = (level="", departments='', materialType='', materialClass='') => {
   return dispatch => {
       dispatch(getMaterialsBegin())
        AsyncStorage.multiGet([Keys.department, Keys.level])
        .then((value)=>{
            let departmentId =JSON.parse(value[0][1])._id
            let levelId =JSON.parse(value[1][1])._id
            axios.get(`http://localhost:3000/material/${departmentId}/${levelId}`)
            .then(({data})=>{
              dispatch(getMaterialSuccess(data))
            })
            .catch(error=>{
            dispatch(getMaterialError(error))
            })
        })
   };
 };
 
 const getMaterialsBegin= ()=>({
   type:GET_MATERIALS_BEGIN
 })
 
 const getMaterialSuccess= (materials)=>({
   type:GET_MATERIALS_SUCCESS,
   payload:{
     materials,
   }
 })
 
 const getMaterialError= error=>({
   type:GET_MATERIALS_ERROR,
   payload:{
      error
   }
 })
 
 