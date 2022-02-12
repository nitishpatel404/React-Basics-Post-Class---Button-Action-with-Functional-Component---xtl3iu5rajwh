import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const shoot = () => 
      {
<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      }
  return (
    <div id="main">
      
     <button onClick={shoot} id="click">Click Here</button>
    </div>
  );
}


export default App;
