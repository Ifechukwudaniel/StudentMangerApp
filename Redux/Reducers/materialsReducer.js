import {
  GET_MATERIALS_BEGIN, 
  GET_MATERIALS_SUCCESS, 
  GET_MATERIALS_ERROR,
  MATERIALS_SEARCH_BEGIN,
  MATERIALS_SEARCH_SUCCESS,
  MATERIALS_SEARCH_ERROR
} from '../Varables'

const initialState = {
 materials:[],
 loading:false,
 error:null,
 searchEmpty:false
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
      case MATERIALS_SEARCH_BEGIN:
        return {
          ...state,
          materials:[],
          loading:true,
          error:null
        };
      case MATERIALS_SEARCH_SUCCESS:
        if(action.payload.materials.length==0){
          return {
            ...state,
            materials:action.payload.materials,
            loading:false,
            error:null,
            searchEmpty:true
          };

        }
        return {
          ...state,
          materials:action.payload.materials,
          loading:false,
          error:null
        };
      case MATERIALS_SEARCH_ERROR:
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
