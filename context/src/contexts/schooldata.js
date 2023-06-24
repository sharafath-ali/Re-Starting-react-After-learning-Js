import React, { createContext, useState } from "react";
export const SchoolRank = createContext();
const data = [
  { name: "kms", rank: 1 },
  { name: "kgs", rank: 6 },
];
function Schooldata(props) {
  const [datas, setdatas] = useState(data);
  return (
    <SchoolRank.Provider value={[datas,setdatas]}>
     {props.children}
    </SchoolRank.Provider>
  );
}

export default Schooldata;
