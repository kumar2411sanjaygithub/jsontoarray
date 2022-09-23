import React, { useState } from 'react'
import Alertmsg from '../Alertmsg'

const ContactUs = () =>{
	const [ msg, setMsg ] = useState(false)
	const onClick = ()=>{
		setMsg(true)
	}
	return(
		<>
		    <div className="container-fluid">
		        <div className="row mt-5">
		            <h3 className="text-center">
		                 Contact Us
		            </h3>
		            <div className="col-md-4 offset-md-4">
					</div>
		            <main className="" style={{height: "90vh",marginTop:"50px"}}>
		                <div className="row">
		                    <div className="col-md-6 offset-md-3">
		                        <form  method="post">
		                          <div className="form-group">
		                            <label for="exampleInputEmail1">Name</label>
		                            <input type="text" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Enter Name" required/>
		                          </div>
		                          <div className="form-group mt-2">
		                            <label for="exampleInputEmail1">Email</label>
		                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
		                          </div>
		                          <div className="form-group mt-2">
		                            <label for="exampleInputEmail1">Subject</label>
		                            <input type="text" className="form-control" id="exampleSubjectName1" aria-describedby="emailHelp" placeholder="Enter Subject" required/>
		                          </div>
		                          <div className="form-group mt-2">
		                            <label for="exampleFormControlTextarea1">Message</label>
		                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Message" required></textarea>
		                          </div>                  
		                          <button type="button" onClick={()=>onClick()} className="btn btn-primary mt-3">Submit</button>
		                        </form>

		                    </div>
		                </div>
		            </main>
		        </div>
		    </div>
		</>)
}

export default ContactUs