import {screenReducer} from './screenReducer';
import {fabReducer} from './fabReducer';
import {combineReducers} from 'redux';
import {departmentReducer} from './departmentReducer'
import { materialsReducer } from './materialsReducer';
import { blogsReducer } from './blogsReducer';
import { TimeTableReducer } from './timeTableReducer';
import { attendanceReducer } from './attendanceReducer.';
import {activityReducer} from './activityReducer'

export const allReducers = combineReducers({
  department:departmentReducer,
  fab:fabReducer,
  screen :screenReducer,
  material:materialsReducer,
  blogs:blogsReducer,
  timeTable:TimeTableReducer,
  attendance:attendanceReducer,
  activity:activityReducer
});
