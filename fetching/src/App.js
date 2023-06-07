import { useState } from 'react';

function App() {
  const [count, setcount] = useState({})

  fetch("https://jsonplaceholder.typicode.com/users/3")
  .then((res)=>res.json()).then(data=> setcount(data)) ///.then(data=> setcount(data.username));
  
  return (
    <div className="App">
      {count?.username}
    </div>
  );
}

export default App;
