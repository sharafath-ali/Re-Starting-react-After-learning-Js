import { useState } from "react"
function App() {
  const [count,setcount]=useState(0)
  
  var Addcount=()=>{
    setcount(count+1)
    
  }
  return (
    <div>
    <button onClick={Addcount} >ADD</button>
    <h1>count: {count}</h1>
    </div>
  );
}
export default App;
