import React, { useRef,useState } from 'react'

function Refcom() {
    const [Name, setName] = useState([])
    const Input=useRef(null);
    const handle=()=>{
        if(Input.current.value!==""){
        setName((prevname)=>[...prevname,Input.current.value])
        }
    }
  return (
    <div>
        <h1>enter your favourite movie</h1>
        <input type="text" ref={Input}></input>
        <button onClick={handle}>click here</button>
        <ol>
            {
                Name && Name.sort().map((e)=><li>{e}</li>)
            }
        </ol>
    </div>
  )
}

export default Refcom