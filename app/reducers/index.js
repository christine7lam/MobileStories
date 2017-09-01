import { combineReducers } from 'redux';
import * as recipesReducer from './recipes'
import * as navigationReducer from './navigation'
import * as storiesReducer from './stories'

export default combineReducers(Object.assign(
  recipesReducer,
  navigationReducer,
  storiesReducer
));
