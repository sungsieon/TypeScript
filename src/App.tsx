import './App.css';
import React from 'react';

function App() {
  //배열
  const names: string[] = ["Alice","Bob","Eve"]; 

  function  printcoord(pt: {x:number; y:number}){
     console.log("x value is " + pt.x )
     console.log("y value is " + pt.y)
  }
  
  // Array.isArray 함수와 else일 때 type값
  function welcomePeople(x: string[] | string){
    if(Array.isArray(x)){
      console.log("Hello, "+ x.join("and"));
    }else {
      console.log("Welcome lone traveler " + x);
    }

  }

  printcoord({x:10, y:20});

// 타입 별칭

 type User = {
  age:number;
  name:string;
 }

 const user:User = {
  age:15,
  name:"bian",
 }

 type ID = {
  id:number;
 }

 const login:ID = {
  id:15,
 }

  return (
    <div className="flex">
      {names.map((n) => (
        <p key={n}>{n}</p>
      ))}
    </div>
  );
}

export default App;
