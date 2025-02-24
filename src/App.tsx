import './App.css';
import React from 'react';

function App() {
  //배열
  const names: string[] = ["Alice","Bob","Eve"]; 

  return (
    <div className="flex">
      {names.map((n) => (
        <p key={n}>{n}</p>
      ))}
    </div>
  );
}

export default App;
