import {screenReducer} from './screenReducer';
import {fabReducer} from './fabReducer';
import {combineReducers} from 'redux';

export const allReducers = combineReducers({
  controlScreen: screenReducer,
  fab: fabReducer,
});
