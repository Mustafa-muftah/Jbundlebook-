import { ActionTypes } from "../action-types";
import { CellType ,Cell } from "../cell"


export type Direction =  "up" | "down"

export interface MoveCellAction {
  type:ActionTypes.MOVE_CELL,
  payload : {
    id:string,
    direction : Direction
  }
}

export interface DeleteCellAction {
  type:ActionTypes.DELETE_CELL,
  payload:string
}

export interface insertCellAfterAction {
  type:ActionTypes.INSERT_CELL_AFTER,
  payload:{
    id:string | null,
    type:CellType
  }
}

export interface UpdateCellAction {
  type:ActionTypes.UPDATE_CELL ,
  payload:{
    id:string,
    content:string
  }
}

export interface BundleStart {
  type:ActionTypes.BUNDLE_START,
  payload:{
    cellId:string
  }
}

export interface BundleCompelete {
  type:ActionTypes.BUNDLE_COMPELTE,
  payload:{
    cellID:string ,
    code:string,
    err:string | any
  }
}

export interface FetchRequest {
  type:ActionTypes.FETCH_REQUEST
}

export interface FetchSuccess {
  type:ActionTypes.FETCH_SUCCESS
  payload : Cell[]
}

export interface FetchFailed {
  type:ActionTypes.FETCH_FAILED
  payload :string
}

export interface SaveFailed {
  type:ActionTypes.SAVE_FAILED
  payload:string
}

export type cellActions = 
MoveCellAction | DeleteCellAction | insertCellAfterAction
 | UpdateCellAction | BundleStart | BundleCompelete | FetchRequest | FetchSuccess | FetchFailed | SaveFailed