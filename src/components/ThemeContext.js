// ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';
import './darkTheme.css';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem('darkMode')) || false
  );
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
    setAlert({
        msg:message,
        typ: type
    });
    setTimeout(function(){
      setAlert(null);
    },2000);
  }

  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if(darkMode){
        showAlert("Light Mode has been enabled","success");
    }else{
        showAlert("Dark Mode has been enabled","success");
    }
  };

  const theme = {
    backgroundColor: darkMode ? 'rgb(33, 37, 41)' : 'white',
    color: darkMode ? 'white' : 'black',
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleDarkMode, alert, showAlert }}>
      {children}
    </ThemeContext.Provider>
  );
};