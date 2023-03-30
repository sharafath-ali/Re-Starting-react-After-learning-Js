import './Appex.css'
import Header from './components/Header'
import {useState} from 'react'
function App() {
  const data='sharafath'
  return (
  <div>
  <Header data={'sharafath'}/>
  <div className='body'>
  <h1 className='bo'>this is external css</h1>
  <h3 style={{color:'white',backgroundColor:'black'}}>hello</h3>
  <p>this is first react app of {data}</p>
  
  </div>
  <Hel/>
  </div>
  );
}
export default App;

function Hel(){
  const [first, setfirst] = useState(0)
  

 return ( <><h1>this is writen in another function age so it is another component{  first}</h1>
 <button onClick={()=>{setfirst(first+1)}}>click</button>
 </>
 )
}
