import { ActionTypes } from "../action-types";
import { cellActions } from "../action";
import produce from "immer";

interface bundelState {
  [key:string]:{
    loading:boolean,
    err:string,
    code:string
  } | undefined ;
}

const  initialState:bundelState = {};

const bundleReducer = produce((state:bundelState = initialState , action:cellActions) =>{
  switch(action.type){
    case ActionTypes.BUNDLE_START:
      state[action.payload.cellId] = {
        loading:true,
        err:"",
        code:""
      }
      return state;
      case ActionTypes.BUNDLE_COMPELTE:
        state[action.payload.cellID] = {
          loading:false,
          code:action.payload.code,
          err:action.payload.err
        }
        return state;
        default:
          return state;

  }
},initialState)

export default bundleReducer;
 