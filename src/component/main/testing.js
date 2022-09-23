import React, { useState } from 'react'
import AceEditor from "react-ace";
import Alertmsg from '../Alertmsg'
const JsonFormatter = () =>{

	const [ editor, setEditor ] = useState('')
	const [ editorVal, setEditorVal ] = useState('')
	const [ msg, setMsg ] = useState('')
	// const [ sampleData, setSampleData ] = useState('')
	function JsonFormatter() 
	{
		if(editor!='')
		{
			try{
				setMsg('')
				setEditorVal(JSON.stringify(JSON.parse(editor), null, 4))
	             // console.log("change", editor);
	        }catch(e){
	        	setMsg(e.message)
	            console.log('error', e.message);        
	        }
		}
		else
		{
			setMsg('JSON data is not valid.')
		}
	}

function onChange(newValue) {
	setEditor(newValue)
  // console.log("changedd", newValue);
}
const SampleJson = ()=>{
        let json ={
            "schools":[{
                "id":"SH001",
                "name":"KVS Delhi"
            },
            {
                "id":"SH002",
                "name":"DPS Delhi"
            },
            {
                "id":"SH003",
                "name":"Jindal Group Delhi"
            },
            {
                "id":"SH004",
                "name":"Convent School Delhi"
            },
            {
                "id":"SH005",
                "name":"Delhi Govt Delhi"
            }]
        };
        // alert(json)
        setEditor(JSON.stringify((json), null, 4));

	console.log(editor)
	}

	const ClearJson = ()=>{
		setEditor('')
	}
	const CopyJson = ()=>{
		// editor.select();
	    // document.execCommand('copy', true, editor);
		const el = document.createElement('input');
		el.value = editor;
		document.body.appendChild(el);
		el.select();
		document.execCommand('copy');
		document.body.removeChild(el);
	}
	return(
		<>
		<Alertmsg msg={msg}/>
			<AceEditor
				mode="json"
			    theme="textmate"
			    name="editor"
			    setOptions={{
		          useWorker: false
		        }}
			    wrapEnabled={true}
			    fontSize={15}
			    fadeFoldWidgets={false}
			    showFoldWidgets={true}
			    showLineNumbers={true}
			    autoScrollEditorIntoView={true}
			    copyWithEmptySelection={true}
			    hScrollBarAlwaysVisible={false}
			    vScrollBarAlwaysVisible={true}
			    onChange={(newValue)=>onChange(newValue)}
			    value={editor}
			    clearSelection = {true}
			    // set the state when the value changes 
		        // onChange={(e) => setEditor(e.target.value)}
			  />
			  <button type="button" onClick = {()=>JsonFormatter()} id="convert">Convert</button>----
			  <a onClick={SampleJson}>Sample Json</a>-----
			  <a onClick={ClearJson}>Clear</a>--------
			  <a onClick={CopyJson}>Copy</a>--------
			  <AceEditor
			    mode = "json"
			    theme = "textmate"
			    name = "editor2"
			    setOptions={{
			          	useWorker: false
			        }}
			    wrapEnabled = {true}
			    fontSize={15}
			    fadeFoldWidgets = {false}
			    showFoldWidgets = {true}
			    autoScrollEditorIntoView = {true}
			    copyWithEmptySelection = {true}
			    hScrollBarAlwaysVisible = {false}
			    vScrollBarAlwaysVisible = {true}
			    setValue={editorVal}
			    clearSelection = {true}
			  />
		</>)
}


export default JsonFormatter