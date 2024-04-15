import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { ThemeContext } from './components/ThemeContext';
import React, { useContext } from 'react';
import AboutUs from './components/AboutUs';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const { alert, showAlert } = useContext(ThemeContext);

  return (
    <>
      <Router>
        <Navbar />	
        <Alert alert={alert} />
        <div className='container my-3'>
          <Routes>
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/" element={<TextForm heading="Enter Text to analyze:)" showAlert={showAlert}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
