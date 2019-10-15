import React from 'react';
import DisplayData from './components/DisplayData'
import { useDarkMode } from './components/DarkMode'
import './App.css';


function App() {

  const [brightness, setBrightness] = useDarkMode("white")
  

  const darkSwitch = () => {
    if (brightness === "white") {
      setBrightness("black")
    }
    else {
      setBrightness("white")
    }
    
  }
  return (
    
    
    <div className={`App ${brightness}`}>
    <button onClick={darkSwitch}>Darkmode</button>
    < DisplayData />
    
    </div>
    
  );
 
}


export default App;

 