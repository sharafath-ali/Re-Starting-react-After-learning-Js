import React, { useContext, useState } from "react";
import { Data } from "./App";
import "./results.css";
import Td from "./td";
import { SchoolRank } from "./contexts/schooldata";
import Table from "./table";
function Displayresults() {
  const [data, setdata] = useState([]);
  const [edit, setedit] = useState(false);
  const [user] = useContext(Data);
  const [datas, setdatas] = useContext(SchoolRank);
  console.log(data);
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
          {datas.map((e,index) => {
            return (
              <Table edit={edit} datas={datas} index={index} setdatas={setdatas} setedit={setedit} e={e}/>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Displayresults;
