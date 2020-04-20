import {
  GET_BLOGS_BEGIN, 
  GET_BLOGS_SUCCESS, 
  GET_BLOGS_ERROR,
} from '../Varables'

const initialState = {
 blogs:[],
 loading:false,
 error:null,
 searchEmpty:false
};

export const blogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOGS_BEGIN:
      return {
        ...state,
        blogs:[],
        loading:true,
        error:null,
      };
    case GET_BLOGS_SUCCESS:
        return {
          ...state,
          blogs:action.payload.blogs,
          loading:false,
          error:null,
    };
    case GET_BLOGS_ERROR:
      return {
        ...state,
        blogs:[],
        loading:false,
        error:action.payload.error,
      };
    default:
      return {...state};
  }
};
