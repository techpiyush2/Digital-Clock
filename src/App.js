import React, { useState } from 'react';
import './App.css'
let time = new Date().toLocaleTimeString();

function App(){ 
  const [ctime,uptime] = useState(time);
  const Updatetime=()=>{
   time = new Date().toLocaleTimeString();
   uptime(time);
  }

  setInterval(Updatetime,1000);

  return (
    <>
      <div className='container1'>
        <h1>Digital Clock</h1>
        <br></br>
        <h1>{ctime}</h1>
      </div>
    </>
  );
}

export default App;
