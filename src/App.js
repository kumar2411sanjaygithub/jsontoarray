import logo from './logo.svg';
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import JsonFormatter from './component/main/JsonFormatter'
import JsonToArray from './component/main/JsonToArray'
import AboutUs from './component/main/AboutUs'
import ContactUs from './component/main/ContactUs'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
function App() {
  return (
    <div className="App">
      <Router>
            <Navbar/>
       <Routes>
			<Route exact path='/' exact element={<JsonFormatter />} />
			<Route path='/json-to-php-array' element={<JsonToArray/>} />
	        <Route path='/about-us' element={<AboutUs/>} />
	        <Route path='/contact-us' element={<ContactUs/>} />
	    </Routes>
      <Footer/>
    </Router>

    </div>
  );
}

export default App;
