import React from 'react'

function Td({edit,datas,index,setdatas,setedit,e}) {
  return (
    <>
    {edit ? (
        <>
          <input value={e.name}
            onChange={(ev) => {
            //   const updatedDatas = [...datas];
            //   updatedDatas[index].name = ev.target.value;
            // setdatas(updatedDatas);
            setdatas((prevValue) => {
                const updatedArray = [...prevValue];
                const updatedObject = { ...updatedArray[index] };
               const updatedObjectva ={...updatedObject,name: ev.target.value}
                updatedArray[index] = updatedObjectva;
                return updatedArray;
              });
              
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