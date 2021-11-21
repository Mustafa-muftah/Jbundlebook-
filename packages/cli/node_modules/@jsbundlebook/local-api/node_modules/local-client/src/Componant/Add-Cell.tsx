import "./Add-Cell.css";
import { useAction } from './../Hooks/useAction';

interface AddCellProps{
  IdPreviousCell : string | null 
  forceVisible?:boolean
}

const AddCell:React.FC<AddCellProps> = ({forceVisible , IdPreviousCell})=> {

   const { insertCellAfter } = useAction();

  return <div className={`add-cell ${forceVisible && 'force-visible'}`}>

         <div className="add-buttons">
    <button className="button is-rounded is-small is-primary" onClick ={() => insertCellAfter(IdPreviousCell,"code")}>
    <span className="icon is-small">
        <i className="fas fa-plus"/>
      </span>
      <span> Code</span>
      </button>

    <button  className="button is-rounded is-small is-primary" onClick ={() => insertCellAfter(IdPreviousCell,"text")}>
      <span className="icon is-small">
        <i className="fas fa-plus"/>
      </span>
      <span> Text</span>
      </button>
      </div>

     <div className="divider"></div>
  </div>

}

export default AddCell;