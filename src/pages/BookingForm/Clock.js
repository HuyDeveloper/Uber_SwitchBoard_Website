import React from "react";
import "./clockModule.css";
const Clock=()=>{
    const hourInput=document.getElementById('hourInput');
    const minuteInput=document.getElementById('minuteInput');
    
    return (
        <div>
            <h3>
                Clock
            </h3>
            <div class='inputs'>
                <input type='number' id="hourInput" placeholder='00' min='0' max='23'/>
                <input type='number' id="minuteInput" placeholder='00' min='0' max='59'/>
            </div>
        </div>
    )
  }
  export default Clock;