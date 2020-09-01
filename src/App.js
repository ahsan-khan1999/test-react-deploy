import React, { useState } from 'react';

import './App.css';
import  Message  from './Message';

function App() {
  let [count, setCount] = useState(0);
  let [day,setDay] = useState(false)
  return (
    <div className={`box ${day ? 'day' : ''}`}>

      <Message count = {count}/>
      <button onClick={() => setCount(++count)}>Press Me To Increase Count</button>
      <button onClick={() => setDay(!day)}>Press Me To Change The Day!</button>
      <button onClick={() => {
        if(count === 0){
          alert('you cannot --');
        }
        else{
          setCount(--count)  
        }
        
      }}>Press Me To Decrease Count</button>



    </div>
  );
}

export default App;
