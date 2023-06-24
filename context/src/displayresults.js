import React, { useContext ,useState} from "react";
import { Data } from "./App";
import './results.css'
import { SchoolRank } from "./contexts/schooldata";
function Displayresults() {
  const [data,setdata]=useState([])
  const [edit, setedit] = useState(false)
  const [user] = useContext(Data);
  const [datas,setdatas]=useContext(SchoolRank);

  return (
    <>
      <table className="custom-table">
        <thead>
        <tr>
          <th>name of student</th>
          <th>rank</th>
        </tr>
        </thead>
        <tbody>
        {user.map((e) => {
          return (
            <tr>
              <td>{e.name}</td>
              <td>{e.rank}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
      <table className="custom-table">
        <thead>
        <tr>
          <th>name of school</th>
          <th>rank</th>
          <th>edit</th>
        </tr>
        </thead>
        <tbody>
        {datas.map((e) => {
          return (
            <tr>
              <td><td>{edit ? <><input/> <button onClick={()=>{setedit(false);setdatas(data)}}>save</button></> : e.name}</td></td>
              <td>{e.rank}</td>
              <td><button onClick={()=>{setedit(true)}}>edit</button></td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </>
  );
}

export default Displayresults;
