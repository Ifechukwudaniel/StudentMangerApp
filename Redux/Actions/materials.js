import {
 GET_MATERIALS_BEGIN,
 GET_MATERIALS_ERROR,
 GET_MATERIALS_SUCCESS,
 MATERIALS_SEARCH_BEGIN,
 MATERIALS_SEARCH_ERROR,
 MATERIALS_SEARCH_SUCCESS
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
          console.log(value)
            let departmentId =JSON.parse(value[0][1])._id
            let levelId =JSON.parse(value[1][1])._id
            axios.get(`http://localhost:3000/material/${departmentId}/${levelId}`)
            .then(({data})=>setTimeout(()=>dispatch(getMaterialSuccess(data)), 1000))
            .catch(error=>dispatch(getMaterialError(error)))
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
 
 

 export const searchMaterials = (text) => {
  return dispatch => {
      dispatch(searchMaterialsBegin())
           text ==""?()=>{
                getMaterials()
           }: ()=>{
            axios.get(`http://localhost:3000/search/material/${text}`)
            .then(({data})=>{
              setTimeout(()=>{
                 console.log(data)
               dispatch(searchMaterialSuccess(data))
              }, 2000)
            })
            .catch(error=>{
            dispatch(searchMaterialError(error))
            })
           }
  };
};

 const searchMaterialsBegin= ()=>({
  type:MATERIALS_SEARCH_BEGIN
})

const searchMaterialSuccess= (materials)=>({
  type:MATERIALS_SEARCH_SUCCESS,
  payload:{
    materials,
  }
})

const searchMaterialError= error=>({
  type:MATERIALS_SEARCH_ERROR,
  payload:{
     error
  }
})