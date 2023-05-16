import clsx from "clsx";
import React from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
interface Props {
  listName: string;
  price: number;
  listPerson: Person[];
}

interface Person {
  name: string;
  bgColor: string;
}
function ShowList({ listName, price, listPerson }: Props) {
  const personLength = listPerson.length;
  return (
    <>
      <div className="col-span-8 mb-2  flex items-center gap-2">
        <span>{listName}</span>
        {listPerson.map((items, index) => {
          return (
            <div
              key={index}
              className={clsx(
                "inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full ", items.bgColor,
                index != 0 ? " ml-[-20px]" : ""
              )}
            >
              <span className="font-medium text-white">{items.name}</span>
            </div>
          );
        })}

        <div
          className={clsx(
            "inline-flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gray-400",
            personLength != 0 ? " ml-[-20px]" : ""
          )}
        >
          <span className="font-medium text-white">
            <AiOutlineUserAdd />
          </span>
        </div>
      </div>
      <div className="col-span-2 flex items-center justify-center ">
        {price}
      </div>
      <div className="col-span-2 flex items-center justify-center ">
        {personLength ? (price / personLength).toFixed() : 0}
      </div>
    </>
  );
}

export default ShowList;
