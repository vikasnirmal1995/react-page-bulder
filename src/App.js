import React, {useState, useEffect} from 'react'
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import gjsPresetWebpage from 'grapesjs-preset-webpage'
import "./styles/main.scss"
const  App = () => {
    const [editor, setEditor] = useState(null)

    console.log("editor states>>", editor.getHtml())

    useEffect(() =>{
        const editor = grapesjs.init({
            container: "#editor",
            plugins: [gjsPresetWebpage],
            pluginsOpts:{
                gjsPresetWebpage: {}
            }
        });
        setEditor(editor)
    },[])
  return (
    <div className="App">
      <div className={"editor"} id={"editor"}></div>
    </div>
  );
}

export default App;
