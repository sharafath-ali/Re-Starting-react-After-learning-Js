import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [count, setcount] = useState({})
  const [name,setname]=useState('')
  const name1=()=>{
  fetch("https://jsonplaceholder.typicode.com/users/3")
  .then((res)=>res.json()).then(data=> setcount(data)) ///.then(data=> setcount(data.username));
  }

  const name2=()=>{
  //axios("https://jsonplaceholder.typicode.com/users/5").then(data=> setname(data.username))
  axios("https://jsonplaceholder.typicode.com/users/5")
  .then(response => {
    const username = response.data.username;
    setname(username);
  })
  .catch(error => {
    console.error(error);
  });
  }
  
  useEffect(() => {
    console.log('only once (at first render) = mounting time only')
  },[])

  useEffect(() => {
    console.log(' at every update + first render')
    setname('aysha')
  })
  
  useEffect(() => {
    console.log('at update of name + first render')
  }, [name])
  return (
    <div className="App">
      {count?.username}
      <button onClick={name1}>name1</button>
      {name}
      <button onClick={name2}>name2</button>
    </div>
  );
}

export default App;
