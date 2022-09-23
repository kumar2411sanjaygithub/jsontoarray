import React from 'react'
import { Link} from 'react-router-dom';
const Footer = ()=>{
	return(
		<>
		    <footer className="bottom-strip text-white text-center">
		        <div className="container-fluid">
		            <div className="row">
		                {/*<ul className="nav justify-content-center border-bottom ulfooter">
		                  <li className="nav-item"><a className="nav-link px-2 text-muted">Home</a></li>
		                  <li className="nav-item"><a className="nav-link px-2 text-muted">Contact us</a></li>
		                  <li className="nav-item"><a className="nav-link px-2 text-muted">FAQs</a></li>
		                  <li className="nav-item"><a className="nav-link px-2 text-muted">About</a></li>
		                </ul>*/}
		                <ul className="nav justify-content-center border-bottom ulfooter">
		                  <li className="nav-item"><Link to="/contact-us" className="nav-link px-2 text-muted">Contact us</Link></li>
		                  <li className="nav-item"><Link to="/about-us" className="nav-link px-2 text-muted">About</Link></li>
		                </ul>

		                <p className="mb-0">
		                    @2022 | V1.0.0 Develop and Design by jsontoarray.com
		                </p>
		            </div>
		        </div>
		    </footer>
		</>)
}

export default Footer;