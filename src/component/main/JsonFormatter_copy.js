import React from 'react'
import {SampleJSON} from '../comman/jsontoarray';
const JsonFormatter = () =>{
	// function SampleJSON()
	// {
	// 	console.log('heii');
	// }
	return(
		<>
		    <div className="container-fluid">
		        <div className="row mt-5">
		            <h3 className="text-center">
		                 JSON Formatter
		            </h3>
		            <div className="col-md-4 offset-md-4">
		                <div className="alert alert-success" role="alert" style={{display: "none"}} id="successalertMsg">
		                    <p id="succMsg"></p>
		                </div>
		                <div className="alert alert-danger" role="alert" style={{display: "none"}} id="dangeralertMsg">
		                    <p id="dangMsg"></p>
		                </div>
		            </div>
		            <main className="" style={{height: "90vh",marginTop:"50px"}}>
		                <div className="row">
		                    <div className="col-md-5">
		                        <span>
		                            <a onClick={()=>SampleJSON1()} data-toggle="tooltip" data-placement="bottom" title="Sample JSON Data"><i className="text-center">Sample Data</i></a>&nbsp;
		                            <a onClick="CopyEditor(1)" data-toggle="tooltip" data-placement="bottom" title="Copy to Clipboard"><i className="fa fa-copy"></i></a>&nbsp;
		                            <a onClick="ClearEditor(1)" data-toggle="tooltip" data-placement="bottom" title="Clear"><i className="fa fa-close"></i></a>
		                        </span>
		                        <div id='editor' className="ace-editor-custom"></div>
		                    </div>
		                    <div className="col-md-2 centerDiv">
		                        <div className="" style={{textAlign: "center"}}>
		                            <div className="row mt-5">
		                                <div className="col-md-6">
		                                    <div clas="file_input_wrap">
		                                        <input type="file" name="imageUpload" id="imageUpload" onChange="previewFile(this);" className="hide" />
		                                        <label htmlFor="imageUpload" className="btn btn-secondary"><i className="fa fa-upload" aria-hidden="true"></i> File</label>
		                                    </div>
		                                </div>
		                                <div className="col-md-6">
		                                    <button type="button" className="btn btn-secondary" id="getURL"  data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa fa-paperclip" aria-hidden="true"></i> URL</button>
		                                </div>
		                            </div>
		                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		                                <div className="modal-dialog">
		                                  <div className="modal-content">
		                                    <div className="modal-header">
		                                      <h4 className="modal-title">Load External URL</h4>
		                                      <button type="button" className="close" data-bs-dismiss="modal">&times;</button>
		                                    </div>
		                                    <form method="post" id="target">
		                                    <div className="modal-body">
		                                      <div className="row my-2">
		                                        <div className="col-lg-12 col-md-12 col-12 mx-auto">
		                                          <label className="form-label" style={{float:" left"}}>URL</label>
		                                          <div className="input-group input-group-outline">
		                                            <input type="text" name="url" id="url"  className="form-control" required />
		                                          </div>
		                                        </div>
		                                      </div> 
		                                    </div>
		                                    <div className="modal-footer">
		                                      <div className="row my-2">
		                                        <div className="col-lg-8 col-sm-8 col-12">
		                                          <button className="btn btn-success w-100 mb-0 toast-btn" type="submit">Load JSON</button>
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
		                        <div className="btnDiv">
		                            <button type="button" className="btn btn-info  btn-lg" style={{width:"200px"}} id="convert">Format / Beautify</button>
		                        </div>
		                    </div>
		                    <div className="col-md-5">
		                        <span>
		                            <i className="text-center">Result</i>&nbsp;
		                            <a onClick="CopyEditor(2)"><i className="fa fa-copy"></i></a>&nbsp;
		                            <a onClick="ClearEditor(2)"><i className="fa fa-close"></i></a>
		                        </span>
		                        <div id='editor2' className="ace-editor-custom"></div>
		                    </div>

		                </div>
		            </main>
		        </div>
		    </div>
		</>)
}

export default JsonFormatter