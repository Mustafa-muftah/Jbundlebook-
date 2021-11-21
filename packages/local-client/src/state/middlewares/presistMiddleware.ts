import { Dispatch } from 'react';
import { cellActions } from "../action"
import { saveCells } from '../action-creator';
import { ActionTypes } from '../action-types';
import { RootState } from '..';




 

//  first fuc argument is object like store obj 
 export const persistMiddlware = ({ dispatch , getState }:{ dispatch : Dispatch<cellActions> , getState : () => RootState }) => {
   // second argument is type of action 

   let timer :any
  return ( next: (action:cellActions) => void) => {
    return (action :cellActions ) => {

      next(action);
      

      if (
        [
          ActionTypes.MOVE_CELL,
          ActionTypes.UPDATE_CELL,
          ActionTypes.INSERT_CELL_AFTER,
          ActionTypes.DELETE_CELL,
        ].includes(action.type)
      ) {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          saveCells()(dispatch, getState);
        }, 250);
      }
    };
  };
};



 