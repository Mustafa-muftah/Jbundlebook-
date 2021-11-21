import produce from "immer"
import { cellActions } from "../action"
import { ActionTypes } from "../action-types"
import { Cell } from "../cell"


interface CellState {
  id:string,
  loading:boolean,
  error:string,
  order:string[],
  data : {
    [key:string]:Cell
  }
}

const initalState:CellState = {
  id:"",
  loading:false,
  error:"",
  order:[],
  data:{}
}

 const cellReducer = produce((state:CellState = initalState , Action :cellActions) => {

  switch(Action.type){

    case ActionTypes.SAVE_FAILED:

    state.error = Action.payload

    return state;
    case ActionTypes.FETCH_REQUEST:

      state.loading = true

    return state ;

    case ActionTypes.FETCH_SUCCESS:

    state.order = Action.payload.map((cell) => cell.id)
    state.data = Action.payload.reduce((acc,cell) => {
      acc[cell.id] = cell
      return acc
    },{} as CellState ['data'] )
    return state ;

    case ActionTypes.FETCH_FAILED:

      state.loading= false ;
      state.error = Action.payload

    return state ;

    case ActionTypes.MOVE_CELL:

      const { direction } = Action.payload;
      const index = state.order.findIndex((id) => id === Action.payload.id)
      const targtIndex = direction === "up" ? index -1 : index + 1

      if(targtIndex < 0  || targtIndex > state.order.length -1) {

         return state;
      }
       state.order[index] = state.order[targtIndex]
       state.order[targtIndex] = Action.payload.id

         return state ;

      case ActionTypes.DELETE_CELL:

        delete state.data[Action.payload]
        state.order = state.order.filter( id => id !== Action.payload)

        return state;

        case ActionTypes.INSERT_CELL_AFTER:

         const cell :Cell = {
           id:randomId(),
           type:Action.payload.type,
           content:''
         }

         state.data[cell.id] = cell

         const foundIndex = state.order.findIndex((id) => id === Action.payload.id);

         if(foundIndex< 0){
            state.order.unshift(cell.id)
         }else{
           state.order.splice(foundIndex + 1, 0,cell.id)
         }

          return state  ;

          case ActionTypes.UPDATE_CELL:

            const { id , content } = Action.payload
             state.data[id].content=content;

             return state ;

            default:
              return state;
  }
}
,initalState);


const randomId = () => {
 return Math.random().toString(36).substring(2,5)
}
export default cellReducer;