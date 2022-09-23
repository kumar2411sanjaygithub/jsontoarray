import React, { useState } from 'react'
import Alertmsg from '../Alertmsg'

const AboutUs = () =>{
	return(
		<>
		    <div className="container-fluid">
		        <div className="row mt-5">
		            <h3 className="text-center">
		                 About Us
		            </h3>
		            <main className="" style={{height: "90vh",marginTop:"50px"}}>
	                <div className="row">
	                    <div className="col-md-8 offset-md-2">
	                        <p>JsonToArray is developed for convert your JSON data's in php array. This Portal also provides Formatted and Minify your Json as per your expected output.</p>
	                        <p><b>We launch following functionality.</b></p>
	                        <ul>
	                            <li>JSON Formatter</li>
	                            <ul>
	                                <li>Minifier</li>
	                                <li>Beautifier</li>
	                                <li>Validator</li>
	                            </ul>
	                        </ul>
	                        <p><b>We will launch following functionalities.</b></p>
	                        <ul>
	                            <li>Json To Array</li>
	                            <li>Xml Formatter</li>
	                            <li>Json to base64</li>
	                        </ul>

	                    </div>
	                </div>
		            </main>
		        </div>
		    </div>
		</>)
}

export default AboutUs