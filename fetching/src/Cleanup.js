import React, { useState,useEffect } from 'react'

function Cleanup() {
    const [count, setcount] = useState(1)
    useEffect(() => {
        console.log('set in cleanup')
        let a=setInterval(()=>{
          console.log('this is setinterval')
        },1000)
        return ()=>{clearInterval(a)}
      },[count])
  return (
    <div>{count}
    <button onClick={setcount(count+1)}></button>
    </div>
  )
}

export default Cleanup