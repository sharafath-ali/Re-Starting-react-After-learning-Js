import React from 'react'

function Td({edit,datas,index,setdatas,setedit,e}) {
  return (
    <>
    {edit ? (
        <>
          <input value={e.name}
            onChange={(ev) => {
              const updatedDatas = [...datas];
              updatedDatas[index].name = ev.target.value;
              setdatas(updatedDatas);
            }}
          />
          <button
            onClick={() => {
              setedit(false);
            }}
          >
            save
          </button>
        </>
      ) : (
        e.name
      )}
      </>
  )
}

export default Td