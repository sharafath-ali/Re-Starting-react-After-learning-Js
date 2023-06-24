import { createContext, useState } from "react";
import Displayresults from "./displayresults";
import Schooldata from "./contexts/schooldata";
export const Data = createContext()
function App() {
  const users = [{ name: 'amana', rank: 1 }, { name: 'riya', rank: 2 }, { name: 'safna', rank: 4 }, { name: 'aysha', rank: 10 }]
  return (
      <Data.Provider value={[users]}>
      <Schooldata>
      <Displayresults />
      </Schooldata>
      </Data.Provider>
  );
}

export default App;
