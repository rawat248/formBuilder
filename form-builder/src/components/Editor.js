import React,{useState,useEffect} from 'react';
import grapesjs from 'grapesjs';
import "../styles/main.scss";
import gjsPresetWebpage from "grapesjs-preset-webpage";

const Editor = () => {
  const[editor,setEditor] = useState(null);

  useEffect(()=>{
    const editor = grapesjs.init({
      container:"#editor",
      plugins:[gjsPresetWebpage],
      pluginsOpts:{
        gjsPresetWebpage:{},
      }
    });
    setEditor(editor)
  },[])

  return (
    <div id="editor"></div>
  )
}

export default Editor;