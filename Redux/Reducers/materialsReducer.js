import {
  GET_MATERIALS_BEGIN, GET_MATERIALS_SUCCESS, GET_MATERIALS_ERROR
} from '../Varables'

const initialState = {
 materials:[],
 loading:false,
 error:null
};

export const materialsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MATERIALS_BEGIN:
      return {
        ...state,
        materials:[],
        loading:true,
        error:null
      };
    case GET_MATERIALS_SUCCESS:
        return {
          ...state,
          materials:action.payload.materials,
          loading:false,
          error:null
    };
    case GET_MATERIALS_ERROR:
      return {
        ...state,
        materials:[],
        loading:false,
        error:action.payload.error
      };
    default:
      return {...state};
  }
};
