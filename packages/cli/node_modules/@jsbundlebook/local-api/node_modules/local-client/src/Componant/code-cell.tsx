import "./code-cell.css";
import {  useEffect  } from "react";
import { Cell } from "../state/cell";
import CodeEditor from './code-editor';
import Preview from "./Preview";
import Resizable from "./Resizable";
import { useAction } from './../Hooks/useAction';
import { useTypeSelector } from "../Hooks/useTypeSelector";
import { useCumulativeCode } from './../Hooks/useCumlativeCode';

interface codeCellProps {
  cell:Cell
}


 const CodeCell:React.FC<codeCellProps> =({cell}) => {
  
   const { updateCell , bundleProcess } = useAction()
   const bundle = useTypeSelector((state) => state.bundle[cell.id])
   
   const cumlativeCode = useCumulativeCode(cell.id)

  
 
   useEffect( () => {
    
     const timer = setTimeout( async() => {
     bundleProcess(cell.id , cumlativeCode)
     },1000)

     return () => {
       clearTimeout(timer)
     }
    
   }, [ cell.id ,cumlativeCode , bundleProcess])
   

  return (
    
      <Resizable direction="Vertical">

      <div style={{ height: 'calc(100% - 10px)', display: 'flex', flexDirection: 'row' }}>

      <Resizable direction="Horzintal">

      <CodeEditor 
      initialValue={cell.content}
       onChange={(value) => updateCell(cell.id ,value)}
       />

        </Resizable>
        <div className="progress-wrapper">
          {!bundle || bundle.loading ? (
            <div className="progress-cover">
              <progress className="progress is-small is-primary" max="100">
                Loading
              </progress>
            </div>
          ) : (
            <Preview code={bundle.code} err={bundle.err} />
          )}
        </div>
       </div>
       </Resizable>
    
  )
}

export default CodeCell;