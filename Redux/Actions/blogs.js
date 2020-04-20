import {
  GET_BLOGS_BEGIN,
  GET_BLOGS_ERROR,
  GET_BLOGS_SUCCESS,
  } from '../Varables';
  
  import axiosService from '../../services/axiosService';
  let axios = axiosService.initInstance()
  
  export const getBlogs = () => {
    return dispatch => {
        dispatch(getBlogsBegin())
             axios.get("http://localhost:3000/blog/")
             .then(({data})=>{
                setTimeout(()=> dispatch(getBlogsSuccess(data)), 2000)
             })
             .catch(error=>{
             dispatch(getBlogsError(error))
             })
    };
  };
  
  const getBlogsBegin= ()=>({
    type:GET_BLOGS_BEGIN
  })
  
  const getBlogsSuccess= blogs=>({
    type:GET_BLOGS_SUCCESS,
    payload:{
       blogs,
    }
  })
  
  const getBlogsError= error=>({
    type:GET_BLOGS_ERROR,
    payload:{
       error
    }
  })
  