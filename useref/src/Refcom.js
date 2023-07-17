import React, { useRef,useState , useMemo } from 'react'

function Refcom() {
    const [Name, setName] = useState([])
    const Input=useRef(null);
    const handle=()=>{
        if(Input.current.value!==""){
        setName((prevname)=>[...prevname,Input.current.value])
        }
    }
   const sortedName=useMemo(() => {console.log(Name); return Name.sort();}, [Name])
  return (
    <div>
        <h1>enter your favourite movie</h1>
        <input type="text" ref={Input}></input>
        <button onClick={handle}>click here</button>
        <ol>
            {
                Name && sortedName.map((e,index)=><li key={index}>{e}</li>)
            }
        </ol>
    </div>
  )
}

export default Refcom