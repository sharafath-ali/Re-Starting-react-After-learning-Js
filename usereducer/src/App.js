import { useReducer, useState } from "react";
const initialState = "web diary";
function App() {
  const [edit, setedit] = useState(false);
  const [edit1, setedit1] = useState(false);
  const reducercallback = (stateValue,actions) => {
    console.log("reducer callback is called");
    console.log(stateValue)
    console.log(actions)
    if(actions==='change the state')
    {
      stateValue='web Dia'
    }
    else if(actions==='change the state2')
    {
      stateValue='2023  is started'
    }
    return stateValue
  };
  // console.log(useReducer('web'))
  // console.log(useReducer(null,'web'))
  const [state, dispatch] = useReducer(reducercallback, initialState);

  return (
    <>
    <>
      {edit ? (
        <>
          <input />
          <button
            onClick={() => {
              setedit(false);
              dispatch('change the state');
            } }
          >
            save
          </button>
        </>
      ) : (
        state
      )}
      <br />
      <button
        onClick={() => {
          setedit(true);
        } }
      >
        edit
      </button>
    </>
    <>
        <button
          onClick={() => {
            dispatch('change the state2')
          } }
        >
          show year
        </button>
      </>
      </>
  );
}

export default App;
