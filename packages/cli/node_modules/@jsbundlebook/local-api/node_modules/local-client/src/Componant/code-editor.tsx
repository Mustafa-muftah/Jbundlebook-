import "./code-editor.css"
import MonacoEditor , {EditorDidMount} from "@monaco-editor/react";
import prettier from "prettier"
import parser from "prettier/parser-babel"
import { useRef } from "react";

interface codeEditorProps {
  initialValue : string
  onChange(value:string):void
}




const CodeEditor:React.FC <codeEditorProps> = ({onChange , initialValue})  => {
  const editorRef = useRef<any>()
  const  onEditorDidMount:EditorDidMount = ( getValue , monacoEditor ) => {
    editorRef.current = monacoEditor;
    monacoEditor.onDidChangeModelContent( () => {
      onChange(getValue())
    })
    monacoEditor.getModel()?.updateOptions({tabSize:2})
    
  }
  const onFormat =() => {
   const unFormatted =  editorRef.current.getModel().getValue()
   const Formatted = prettier.format(unFormatted , {
     parser:"babel",
     plugins:[parser],
     useTabs:false,
     semi:true,
     singleQuote:true
   }
  ).replace(/\n$/," ");
  

   editorRef.current.getModel().setValue(Formatted)
  }
return(
<div className="editor-wrapper">
  <button className="button button-format is-primary is-small" onClick={onFormat}>Format</button>
  <MonacoEditor
          editorDidMount={onEditorDidMount}
          value={initialValue}
          theme="dark"
          language="javascript"
          options={{
          wordWrap: 'on',
          minimap: { enabled: false },
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
      }}
/>
</div>
)}

export default CodeEditor;