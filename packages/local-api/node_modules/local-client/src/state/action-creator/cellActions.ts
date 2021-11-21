import { ActionTypes } from "../action-types";
import { MoveCellAction ,DeleteCellAction ,insertCellAfterAction ,UpdateCellAction , Direction } from "../action"
import  { CellType } from"../cell";

export const moveCell = (id:string , direction:Direction):MoveCellAction => {
  return {
    type:ActionTypes.MOVE_CELL,
     payload:{
       id,
       direction
     }
  }

}

export const deleteCell = (id:string):DeleteCellAction => {
  return{
    type:ActionTypes.DELETE_CELL,
    payload:id
  }
  
}
export const insertCellAfter = (id:string | null , type :CellType):insertCellAfterAction => {
  return{
    type:ActionTypes.INSERT_CELL_AFTER ,
    payload:{
      id,
      type
    }
  }
  
}
export const updateCell = (id:string , content:string):UpdateCellAction => {
  return {
    type:ActionTypes.UPDATE_CELL ,
    payload : {
      id,
      content
    }
  }
  
}