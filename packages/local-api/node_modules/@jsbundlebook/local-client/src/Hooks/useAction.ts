import { useMemo } from "react";
import { useDispatch  } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../state";



export const useAction = () => {
  const dispatch = useDispatch();
  return useMemo (() =>{
   return bindActionCreators(ActionCreators,dispatch)
  } , [dispatch])
}

