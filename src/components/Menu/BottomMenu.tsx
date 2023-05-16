import React from "react";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { RiBillFill } from "react-icons/ri";
import { FaHistory } from "react-icons/fa";
import clsx from "clsx";
const menus = [
  {
    name: "หน้าหลัก",
    icon: <AiFillHome size="1.5rem" />,
    id: "home",
  },
  {
    name: "ประวัติการออกบิล",
    icon: <FaHistory size="1.5rem" />,
    id: "history",
  },
  {
    name: "ตั้งค่า",
    icon: <AiFillSetting size="1.5rem" />,
    id: "settings",
  },
];
function BottomMenu() {
  return (
    <>
    <div className="fixed bottom-0 w-full max-w-md overflow-hidden rounded-t-xl bg-white z-10">
      <div className="grid grid-cols-12 items-center">
        {menus.map(({ name, icon, id }, index) => {
          return (
            <button
              key={name}
              className={clsx(
                "col-span-4 flex flex-col items-center gap-2 pt-2"
              )}
            >
              {icon}
              <h4 className="pb-1 text-sm">{name}</h4>
            </button>
          );
        })}
      </div>
    </div>
    </>
  );
}

export default BottomMenu;
