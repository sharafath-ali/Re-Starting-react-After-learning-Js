import React from 'react'
import { useState } from 'react';
import Td from './td';
function Table({datas,index,setdatas,e}) {
    const [edit, setedit] = useState(false);
  return (
    <tr>
    <td>
        <Td edit={edit} datas={datas} index={index} setdatas={setdatas} setedit={setedit} e={e} />
    </td>
    <td>{e.rank}</td>
    <td>
      <button
        onClick={() => {
          setedit(true);
        }}
      >
        edit
      </button>
    </td>
  </tr>
  )
}

export default Table