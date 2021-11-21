import { Cell } from "../state/cell";
import CodeCell from './code-cell';
import TextEditor from './text-editor';
import ActionBar from './Action-Bar';
import "./cell-List-Items.css";



interface CellsRendering {
  cell:Cell
}

const CellListItem:React.FC<CellsRendering> = ({cell}) => {
  let child :JSX.Element ;
    if(cell.type === "code"){
     child = <>
     <div className="action-bar-wrapper">
     <ActionBar id={cell.id}/>
     </div>
     <CodeCell cell={cell}/>
     </>
  }else{
     child = <>
     <TextEditor cell={cell}/>
     <ActionBar id={cell.id}/>
     </>
  }

 

  return <div className="cell-list-item">
    {child}
    
    </div>
}

export default CellListItem;