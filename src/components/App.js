import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
const[text,usetext]=useState(true)
  
  
  const shoot = () => 
     {
       usetext("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy")
        }
  return (
    
    <div id="main" >
   
         
          <p id="para">{text}</p>
</div>
          
      
     <button onClick={shoot} id="click" >Click Here</button>
    </div>
  );
}


export default App;
