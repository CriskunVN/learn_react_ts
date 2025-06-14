import React, { useState } from 'react';
import './App.css';

function App() {
  const [name , setName] = useState('React');
  const changeName = () => { 
    setName('React TS 2025')
  }
  return (
    <div className="App">
      <button onClick={changeName}>Ok</button>
      <h1>{name}</h1>
    </div>
  );
}

export default App;
