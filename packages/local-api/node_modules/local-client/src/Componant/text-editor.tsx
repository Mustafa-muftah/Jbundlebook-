import MDEditor from "@uiw/react-md-editor";
import { useState, useEffect,useRef } from 'react';
import { Cell } from "../state/cell";
import "./Text-editor.css"
import { useAction } from './../Hooks/useAction';

interface textEditorProps{
  cell:Cell
}

const TextEditor:React.FC<textEditorProps> =({cell}) => {
  const ref = useRef <HTMLDivElement | null>(null)
  const [edit, setedit] = useState(false)

 const { updateCell } =  useAction()

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (
        ref.current &&
        event.target &&
        ref.current.contains(event.target as Node)
      ) {
        return;
      }

      setedit(false);
    };
    document.addEventListener('click', listener, { capture: true });

    return () => {
      document.removeEventListener('click', listener, { capture: true });
    };
  }, []);

  if (edit){
    return <div className="text-editor" ref={ref}>
    <MDEditor value={cell.content} onChange ={ (v) => updateCell (cell.id, v ||"")}/>
    </div>
  }
  return(
    <div className="text-editor card" onClick={() => setedit(true)}>
      <div className="card-content">
      <MDEditor.Markdown source={cell.content || "Click To Edit"} /> 
      </div>
      </div>    
  ) 
}

export default TextEditor ;