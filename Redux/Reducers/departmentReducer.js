import {
  GET_ALL_DEPARTMENTS_BEGIN,
  GET_ALL_DEPARTMENTS_ERROR,
  GET_ALL_DEPARTMENTS_SUCCESS,
  SET_DEPARTMENTS,
  SET_FILTER_DEPARTMENTS
} from '../Varables'

const initialState = {
  departments: [],
  loading:true,
  error:null,
  filterDepartments:[]
};

export const departmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DEPARTMENTS_BEGIN:
      return {
        ...state,
        departments:[], 
        filterDepartments:[],
        loading:true
      };
      case GET_ALL_DEPARTMENTS_SUCCESS:
        return {
          ...state,
          departments:action.payload.departments, 
          filterDepartments:action.payload.departments,
          loading:false,
          error:null
      };
      case GET_ALL_DEPARTMENTS_ERROR:
        return {
          ...state,
          departments:[], 
          filterDepartments:[],
          loading:false,
          error:action.payload.error
      };
      case SET_FILTER_DEPARTMENTS:
        return {
          ...state,
          departments:state.departments,
          filterDepartments:action.payload.filterDepartments,
          loading:false,
          error:null
      };

    default:
      return {...state};
  }
};
