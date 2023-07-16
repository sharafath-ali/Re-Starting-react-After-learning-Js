import React, { useEffect, useRef } from 'react'

function BasicRef() {
  const InputTag=useRef(null);
  const handle = ()=>{
    console.log(InputTag,'from clicks')
  }
  useEffect(() => {
    console.log(InputTag.current.focus(), 'from useEffect');
  },[]);
  return (
    <div>
     <input type="text" ref={InputTag}/>
     <button onClick={handle}>click it</button>
    </div>
  )
}

export default BasicRef