import React from 'react';
import DisplayData from './components/DisplayData'
import { useDarkMode } from './components/DarkMode'
import './App.css';

function App() {

  const [brightness, setBrightness] = useDarkMode(1)


  const darkSwitch = () => {

  }
  return (
    <div style={styles} className="App">

    < DisplayData />
    <button>Darkmode</button>
    </div>
  );
}

export default App;

const styles = {
  backgroundColor: "white",
  
}