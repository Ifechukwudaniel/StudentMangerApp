import {createStore, applyMiddleware, compose} from 'redux';
import {allReducers} from './Reducers/allReducers';
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose

export const store = createStore(allReducers, composeEnhancers(
  applyMiddleware(thunk)
  ));
