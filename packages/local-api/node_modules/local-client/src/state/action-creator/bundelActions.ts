import { ActionTypes } from "../action-types";
import { cellActions } from "../action"
import { Dispatch } from "react";
import bundle from "../../Bundle";

export const bundleProcess =(cellId:string , input:string) => {
  return async (dispatch:Dispatch<cellActions>) =>{
    dispatch({
      type:ActionTypes.BUNDLE_START,
      payload:{
        cellId
      }
    })
    const result = await bundle(input)

    dispatch({
      type:ActionTypes.BUNDLE_COMPELTE,
      payload:{
        cellID:cellId,
        code:result.code,
        err:result.err
      }
    })
  }

}
