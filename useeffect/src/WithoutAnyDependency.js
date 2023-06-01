import React from 'react'
import { useEffect,useState } from 'react';
function WithoutAnyDependency() {
 const [first, setfirst] = useState(1)
 useEffect(()=>{console.log('useEffect rendering',first)})
 return (
    <div>
      <h1>WithoutAnyDependency</h1>
      <p>{first}</p>
      <button onClick={()=>{setfirst(1+first)}}>click to run useEffect</button>
      <p>useEffect(()={})</p>
    </div>
  )
}

export default WithoutAnyDependency