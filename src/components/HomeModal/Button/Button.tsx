import clsx from "clsx";
import React, { useEffect } from "react";
import { FaListUl, FaUserFriends } from "react-icons/fa";

interface Props {
  setState: (page: number) => void;
  currentPage: number;
}
function Button({ setState, currentPage }: Props) {
  const handlePage = (page: number) => {
    setState(page);
  };
  return (
    <>
      <div className="grid grid-cols-12 items-center">
        <button
          onClick={() => handlePage(1)}
          className={clsx(
            "col-span-6 flex h-[5rem] items-center justify-center rounded-tl-[3.5rem] hover:bg-zinc-200",
            currentPage === 1 ? "border-b-4 border-purple-600 text-purple-900" : "border-b-4 border-white"
          )}
        >
          <FaListUl />
          &nbsp;รายการ
        </button>
        <button
          onClick={() => handlePage(2)}
          className={clsx(
            "col-span-6 flex h-[5rem] items-center justify-center rounded-tr-[3.5rem]  hover:bg-zinc-200",
            currentPage === 2 ? "border-b-4 border-purple-600 text-purple-900" : "border-b-4 border-white"
          )}
        >
          <FaUserFriends />
          &nbsp;ผู้จ่าย
        </button>
      </div>
    </>
  );
}

export default Button;
