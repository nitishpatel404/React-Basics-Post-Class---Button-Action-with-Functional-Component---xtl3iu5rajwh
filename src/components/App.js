import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
const[text,usetext]=useState(true)
  
  
  const shoot = () => 
     {
       usetext(false)
        }
  return (
    
    <div id="main" >
    <div hidden={text}>
         
          <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
</div>
          
      
     <button onClick={shoot} id="click" >Click Here</button>
    </div>
  );
}


export default App;
