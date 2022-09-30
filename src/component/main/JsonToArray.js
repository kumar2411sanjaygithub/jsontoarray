import React, { useState } from 'react'
import AceEditor from "react-ace";
import Alertmsg from '../Alertmsg'
import Helmet from 'react-helmet';

const JsonToArray = () =>{
	const [ editor, setEditor ] = useState('')
	const [ editorVal, setEditorVal ] = useState('')
	const [ msg, setMsg ] = useState('')
	const [ url, setUrl ] = useState({url:''})
	function JsonFormatter() 
	{
		if(editor!=='')
		{
			var mapObj = {
				   ':':"=>",
				   '{':"[",
				   '}':"]"

				};
				const str = editor.replace(/:|{|}/gi, function(matched){
				  return mapObj[matched];
				});
			try{
				JSON.stringify(JSON.parse(editor), null, 4)
				setMsg('')
				setEditorVal(str)
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
	function onChange2(newValue) {
		setEditorVal(newValue)
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

	const ClearJson = (props)=>{
		if(props===1)
			setEditor('')
		else
			setEditorVal('')
		// console.log(props)
	}
	const CopyJson = (props)=>{
		if(props===1)
		{
			const el = document.createElement('input');
			el.value = editor;
			document.body.appendChild(el);
			el.select();
			document.execCommand('copy');
			document.body.removeChild(el);
		}
		else
		{
			const el = document.createElement('input');
			el.value = editorVal;
			document.body.appendChild(el);
			el.select();
			document.execCommand('copy');
			document.body.removeChild(el);
		}

	}

	const previewFile = (uploadedFile)=>{
	    const fileReader = new FileReader();
		fileReader.onloadend = ()=>{
		  try{
		  	setMsg('')
			setEditor(JSON.stringify(JSON.parse(fileReader.result), null, 4));
 		  	// console.log(typeof JSON.parse(fileReader.result))
		     // setMsg(null)
		  }catch(e){
		     setMsg("Not valid JSON file!");
		  }
		}
		if( uploadedFile!== undefined)
		  fileReader.readAsText(uploadedFile);
	}
	const handleUrl = (e)=>{
		setUrl({url:e.target.value})
	}
	const handleSubmit =async (e)=>{
		// get url from usestate
		const getUrl = url.url;
	    const printdata = async () => {
	        const response = await fetch(getUrl);
	        var data = await response.json();
	        return data;
	      };

	    try{
	    	setMsg('')
	        setEditor(JSON.stringify(await printdata(), null, 4));
	        setUrl({url:''})
	    } catch (e) {
	    	setMsg(e.message)
	    	setUrl({url:''})
	    }
	}
	return(
		<>
			<Helmet>
				<title>JSON To PHP Array Converter Online</title>
				<meta name="keywords" content="json to array, jsonarray, json2array, json to php array, json 2 array, json to php array converter,json to php array converter online,json to php object converter, json to php converter online" />
				<meta name="description" content="JSON to PHP array converter online | Convert the given JSON into format PHP array, which can be used instantly into your PHP as a PHP array." />

				{/* <meta property="og:title" content="JSON To PHP Array Converter Online" />
				<meta property="og:description" content="JSON to PHP array converter online | Convert the given JSON into format PHP array, which can be used instantly into your PHP as a PHP array." />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="http://jsontoarray.com" />
				<meta property="og:image" content="http://jsontoarray.com/assests/img/logo.png" />

				<meta name="twitter:site" content="@jsontoarray" />
				<meta name="twitter:title" content="JSON To PHP Array Converter Online" />
				<meta name="twitter:description" content="JSON to PHP array converter online | Convert the given JSON into format PHP array, which can be used instantly into your PHP as a PHP array." />
				<meta name="twitter:image" content="http://jsontoarray.com/assests/img/logo.png" />
				<meta name="twitter:card" content="summary_large_image" /> */}

            </Helmet>
		    <div className="container-fluid">
		        <div className="row mt-5">
		            <h3 className="text-center">
		                 JSON To PHP Array
		            </h3>
		            <div className="col-md-4 offset-md-4">
                		<Alertmsg msg={msg}/>
		            </div>
		            <main className="" style={{height: "90vh",marginTop:"50px"}}>
		                <div className="row">
		                    <div className="col-md-5">
		                        <span>
		                            <a onClick={()=>SampleJson()} data-toggle="tooltip" data-placement="bottom" title="Sample JSON Data"><i className="text-center">Sample Data</i></a>&nbsp;
		                            <a onClick={()=>CopyJson(1)} data-toggle="tooltip" data-placement="bottom" title="Copy to Clipboard"><i className="fa fa-copy"></i></a>&nbsp;
		                            <a onClick={()=>ClearJson(1)} data-toggle="tooltip" data-placement="bottom" title="Clear"><i className="fa fa-close"></i></a>
		                        </span>
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
								    className="ace-editor-custom"
								  />
		                    </div>
		                    <div className="col-md-2 centerDiv">
		                        <div className="" style={{textAlign:"center"}}>
		                            <div className="row mt-5">
		                                <div className="col-md-6">
		                                    <div clas="file_input_wrap">
		                                        <input type="file" name="imageUpload" id="imageUpload" className="hide" onChange={(e)=>previewFile(e.target.files[0])} />
		                                        <label for="imageUpload" className="btn btn-secondary"><i className="fa fa-upload" aria-hidden="true"></i> File</label>
		                                    </div>
		                                </div>
		                                <div className="col-md-6">
		                                    <button type="button" className="btn btn-secondary" id="getURL"  data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa fa-paperclip" aria-hidden="true"></i> URL</button>
		                                </div>  
			                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			                                <div className="modal-dialog">
			                                  <div className="modal-content">
			                                    <div className="modal-header">
			                                      <h4 className="modal-title">Load External URL</h4>
			                                      <button type="button" className="close" data-bs-dismiss="modal">&times;</button>
			                                    </div>
			                                    <form>
			                                    <div className="modal-body">
			                                      <div className="row my-2">
			                                        <div className="col-lg-12 col-md-12 col-12 mx-auto">
			                                          <label className="form-label" style={{float: "left"}}>URL</label>
			                                          <div className="input-group input-group-outline">
			                                            <input type="text" name="url" id="url"  className="form-control" required value={url.url} onChange={(e)=>handleUrl(e)}/>
			                                          </div>
			                                        </div>
			                                      </div> 
			                                    </div>
			                                    <div className="modal-footer">
			                                      <div className="row my-2">
			                                        <div className="col-lg-8 col-sm-8 col-12">
			                                          <button className="btn btn-success w-100 mb-0 toast-btn" type="button"  onClick={(e)=>handleSubmit()} data-bs-dismiss="modal">Load JSON</button>
			                                        </div>
			                                        <div className="col-lg-4 col-sm-4 col-12 mt-lg-0 mt-2">
			                                          <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
			                                        </div>
			                                      </div>
			                                    </div>
			                                  </form>
			                                  </div>
			                                  
			                                </div>
			                            </div>

		                            </div>
	                            </div>
		                        <div className="btnDiv">
		                            <button type="button" className="btn btn-info  btn-lg" style={{width:"200px"}} id="convert" onClick = {()=>JsonFormatter()}>Json To PHP Array</button>
		                        </div>
		                    </div>
		                    <div className="col-md-5">
		                        <span>
		                            <i className="text-center">Result</i>&nbsp;
		                            <a onClick={()=>CopyJson(2)}><i className="fa fa-copy"></i></a>&nbsp;
		                            <a onClick={()=>ClearJson(2)}><i className="fa fa-close"></i></a>
		                        </span>
							    <AceEditor
								    mode = "php"
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
								    value={editorVal}
								    clearSelection = {true}
								    onChange={(newValue)=>onChange2(newValue)}
								    className="ace-editor-custom"
								  />
		                    </div>

		                </div>
		            </main>
		        </div>
		    </div>
		</>)
}

export default JsonToArray