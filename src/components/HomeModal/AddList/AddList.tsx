import React, { useEffect, useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";

function AddList() {
  const [list, setList] = useState<string>("");
  const [price, setPrice] = useState<number | null>(0);

  const handleSetPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) < 0) {
      setPrice(0);
    }
    setPrice(Number(e.target.value));
  };
  useEffect(() => {
    if (Number(price) < 0) {
      setPrice(0);
    }
  }, [price]);
  return (
    <>
      {/* <div className="flex justify-between">
        <div className="flex gap-1">
          <input
            autoComplete="false"
            placeholder="กระเพราไข่เยี่ยวม้า"
            type="text"
            onChange={(e) => setList(e.target.value)}
            value={list ? list : ""}
            className="rounded-lg border px-3 py-2 outline-none focus:ring-1"
          />
          <input
            autoComplete="false"
            placeholder="50 บาท"
            onChange={(e) => handleSetPrice(e)}
            value={price ? price : ""}
            type="number"
            className="w-[8rem] rounded-lg border px-3 py-2 outline-none focus:ring-1"
          />
        </div>
        <button className="rounded-full bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700 ">
          <BsPlusCircleFill />
        </button>
      </div> */}
      <div className="grid max-w-md grid-cols-12 gap-3">
        <div className="col-span-6">
          <input
            autoComplete="false"
            placeholder="กระเพราไข่เยี่ยวม้า"
            type="text"
            onChange={(e) => setList(e.target.value)}
            value={list ? list : ""}
            className="rounded-lg border w-full outline-none focus:ring-1 p-2"
          />
        </div>
        <div className="col-span-4 ">
      <input
            autoComplete="false"
            placeholder="50 บาท"
            onChange={(e) => handleSetPrice(e)}
            value={price ? price : ""}
            type="number"
            className=" rounded-lg border w-full outline-none focus:ring-1 p-2"
          /> 
        </div>
        <div className="col-span-2 flex justify-center items-center">
          <button className="rounded-full flex justify-center items-center w-full bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700 ">
            <BsPlusCircleFill />
          </button>
        </div>
      </div>
    </>
  );
}

export default AddList;
