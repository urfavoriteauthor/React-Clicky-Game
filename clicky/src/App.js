import React from 'react';
import logo from './logo.svg';
import './App.css';
import Kagami from './components/kagamiComponent';
import Deku from "./components/dekuComponent"
import Fullmetal from "./components/edComponent"
import Icyhot from "./components/todorokiComponent"
import Score from "./components/score"

function App() {
  return (
    <div className="App">
      <header><h1>Welcome to the Clicky Game!</h1></header>
    
    
      <Kagami />
      <Deku />
      <Fullmetal />
      <Icyhot />
      <br></br>
      <Fullmetal />
      <Kagami />
      <Icyhot />
      <Deku />
      <Score />
    </div>
  );
}

export default App;
