import {screenReducer} from './screenReducer';
import {fabReducer} from './fabReducer';
import {combineReducers} from 'redux';
import {departmentReducer} from './departmentReducer'

export const allReducers = combineReducers({
  department:departmentReducer,
  fab:fabReducer,
  screen :screenReducer
});
