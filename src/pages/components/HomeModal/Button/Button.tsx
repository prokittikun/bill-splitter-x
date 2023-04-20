import React, { useEffect } from "react";
import { FaListUl, FaUserFriends } from "react-icons/fa";

interface Props {
  name: string;
}
function Button(props: Props) {
  const handlePage =  () => {
      console.log(props.name);
    
  };//todo
  console.log(props);
  return (
    <>
      <div className="grid grid-cols-12 items-center gap-1">
        <button onClick={() => handlePage()} className="col-span-6 flex h-[5rem] items-center justify-center rounded-tl-[3.5rem] hover:bg-zinc-200">
          <FaListUl />
          &nbsp;รายการ
        </button>
        <button onClick={() => handlePage()} className="col-span-6 flex h-[5rem] items-center justify-center rounded-tr-[3.5rem] hover:bg-zinc-200">
          <FaUserFriends />
          &nbsp;ผู้จ่าย
        </button>
      </div>
    </>
  );
}

export default Button;