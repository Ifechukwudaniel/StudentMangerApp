import {screenReducer} from './screenReducer';
import {fabReducer} from './fabReducer';
import {combineReducers} from 'redux';
import {departmentReducer} from './departmentReducer'
import { materialsReducer } from './materialsReducer';
import { blogsReducer } from './blogsReducer';

export const allReducers = combineReducers({
  department:departmentReducer,
  fab:fabReducer,
  screen :screenReducer,
  material:materialsReducer,
  blogs:blogsReducer
});
