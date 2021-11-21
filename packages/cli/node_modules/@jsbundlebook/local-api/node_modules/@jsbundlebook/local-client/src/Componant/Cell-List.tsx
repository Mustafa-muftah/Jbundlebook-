import { Fragment , useEffect } from "react";
import { useTypeSelector } from "../Hooks/useTypeSelector";
import AddCell from "./Add-Cell";
import CellListItem from "./Cell-ListItems";
import "./Cell-List.css"
import { useAction } from './../Hooks/useAction';

const CellList = () => {

 const cells = useTypeSelector(({cell:{order , data}}) => order.map((id) => data[id]) )

 const { fetchProccess , saveCells } = useAction() ;

 useEffect ( () => {

  fetchProccess();

 } , [])

 useEffect(( ) => {

  saveCells()

 } ,[JSON.stringify(cells)])

 const renderdCells = cells.map(cell =>{

  return <Fragment key={cell.id} > 

        <CellListItem cell={cell}/>
        <AddCell IdPreviousCell={cell.id}/>

         </Fragment>
 })

  return  <div className="cell-list">
    
    <AddCell forceVisible={cells.length === 0} IdPreviousCell={null}/>
    {renderdCells}
    
    </div>
}

export default CellList;