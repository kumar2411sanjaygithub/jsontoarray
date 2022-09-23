import React from 'react'
import { Link} from 'react-router-dom';

const Navbar = ()=>{
	return(
		<>
		    <header>
		        <nav className="navbar navbar-expand-lg bg-light navbg">
		            <div className="container-fluid">
		                <Link to="/" className="navbar-brand" style={{color:"white",fontWeight: 600,fontSize: "25px"}}><i style={{color:"green"}}>Json</i><i>To</i><i style={{color:"red"}}>Array</i> </Link>
		                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
		                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
		                    aria-expanded="false" aria-label="Toggle navigation">
		                    <span className="navbar-toggler-icon"></span>
		                </button>
		                <div className="collapse navbar-collapse" id="navbarSupportedContent">
		                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

		                    	<li className="nav-item">
		                            <Link className="nav-link" to="/">JSON Formatter</Link>
		                        </li>
		                        <li className="nav-item">
		                            <Link className="nav-link" to="/json-to-php-array">JSON to PHP Array</Link>
		                        </li>
		                        {/*
		                        <li className="nav-item">
		                            <a className="nav-link" href="./xml-formatter.html">XML Formatter</a>
		                        </li>
		                        <li className="nav-item">
		                            <a className="nav-link">JSON Validator</a>
		                        </li>*/}
		                    </ul>
		                </div>
		            </div>
		        </nav>
		    </header>
		</>)
}
export default Navbar;