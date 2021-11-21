import { combineReducers } from 'redux';
import bundleReducer from './bundelReducer';
import  cellReducer  from './cellReducer';


export const Reducers = combineReducers({
  cell:cellReducer,
  bundle:bundleReducer
}) ;


export type RootState = ReturnType<typeof Reducers>
