import React from "react";
import { useReducer } from "react";

const initialState = "sharafath";
function reducerCallback (state,action) {
//   if(action.type='change_state'){
//    return action.payload
//   }
  switch (action.type) {
    case "change_state1":
      return action.payload;
    case "change_state2":
      return action.payload;
    default:
      return state;
}};
function Usereducer() {
  const [state, dispatch] = useReducer(reducerCallback, initialState);
  return (
    <>
      <div>{state}</div>
      <button onClick={()=>dispatch({type:'change_state1',payload:'sharafath is just wow'})}>click me buddy</button>
      <button onClick={()=>dispatch({type:'change_state2',payload:'sharafath is just great'})}>click me buddy</button>
    </>
  );
}

export default Usereducer;
