import React from 'react'
import { useEffect,useState } from 'react';
function Withdependeny() {
    const [second, setscsecond] = useState(1)
    const [first, setfirst] = useState(1)
    useEffect(()=>{console.log(`useEffect render on every change in ${first} and ${second} render`)},[first,second])
  return (
    <div>
    <h1>withdependeny</h1>
    <p>{first}</p>
    <button onClick={()=>{setfirst(1+first)}}>click to run useEffect</button>
    <p>{second}</p>
    <button onClick={()=>{setscsecond(2+second)}}>click to run useEffect</button>
    <p>useEffect(()={},[first,second])</p>
    </div>
  )
}

export default Withdependeny