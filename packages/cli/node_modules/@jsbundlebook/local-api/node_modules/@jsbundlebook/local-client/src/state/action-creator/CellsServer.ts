import { ActionTypes } from "../action-types";
import { cellActions } from "../action"
import { Dispatch } from 'react';
import axios from "axios";
import { Cell } from "../cell";
import { RootState } from "..";




export const fetchProccess =() => {
  return async (dispatch:Dispatch<cellActions>) => {

    dispatch({
      type:ActionTypes.FETCH_REQUEST
    })

    try{

    const { data }:{data:Cell[]} = await axios.get("./cells");

    dispatch({
      type:ActionTypes.FETCH_SUCCESS,
      payload:data
    })

  } catch(err:any){
    
    dispatch({
      type:ActionTypes.FETCH_FAILED,
      payload:err.message
    })
  }
  }
}


export const saveCells =() => {
  return async (dispatch:Dispatch<cellActions> , getState : () => RootState ) => {

    const { cell : { order , data }} = getState () ;

    const cells = order.map((id) => data[id]) ;

    try{

    await axios.post("./cells" , { cells })

    }catch(err:any){

      dispatch({
        type:ActionTypes.SAVE_FAILED ,
        payload:err.message
      })
    }
  }
}