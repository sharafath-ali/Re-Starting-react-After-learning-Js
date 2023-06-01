import React from 'react'
import { useEffect,useState } from 'react';
function WithBlankDependence() {
    const [first, setfirst] = useState(1)
    useEffect(()=>{console.log('this useEffect render only once on first render',first)},[])
  return (
    <div>
        <h1>WithBlankDependence</h1>
        <p>{first}</p>
        <button onClick={()=>{setfirst(1+first)}}>click to run useEffect</button>
        <p>'useEffect(()={},[])'</p>
    </div>
  )
}

export default WithBlankDependence