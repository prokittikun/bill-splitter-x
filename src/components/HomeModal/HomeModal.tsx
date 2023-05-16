import React, { useCallback, useEffect, useRef, useState } from "react";
import Button from "./Button/Button";
import AddList from "./AddList/AddList";
import ShowList from "./ShowList/ShowList";
const data = [
  {
    listName: "กระเพราหมู",
    price: 50,
    listPerson: [
      {
        name: "KB",
        bgColor: "bg-red-500",
      },
      {
        name: "TB",
        bgColor: "bg-blue-500",
      },
      {
        name: "AS",
        bgColor: "bg-yellow-500",
      },
    ],
  },
  {
    listName: "แกงส้มปลายุด",
    price: 45,
    listPerson: [
      {
        name: "AS",
        bgColor: "bg-yellow-500",
      },
    ],
  },
  {
    listName: "ผัดมะละกอหมูสับ",
    price: 60,
    listPerson: [
      {
        name: "TB",
        bgColor: "bg-blue-500",
      },
      {
        name: "AS",
        bgColor: "bg-yellow-500",
      },
    ],
  },
  {
    listName: "จิ้งจกทอดเกลือ",
    price: 30,
    listPerson: [
      {
        name: "AS",
        bgColor: "bg-yellow-500",
      },
      {
        name: "TB",
        bgColor: "bg-blue-500",
      },
    ],
  },
  {
    listName: "จิ้งจกทอดเกลือ",
    price: 30,
    listPerson: [
      {
        name: "AS",
        bgColor: "bg-yellow-500",
      },
      {
        name: "TB",
        bgColor: "bg-blue-500",
      },
    ],
  },
  {
    listName: "จิ้งจกทอดเกลือ",
    price: 30,
    listPerson: [
      {
        name: "AS",
        bgColor: "bg-yellow-500",
      },
      {
        name: "TB",
        bgColor: "bg-blue-500",
      },
    ],
  },
  {
    listName: "จิ้งจกทอดเกลือ",
    price: 30,
    listPerson: [
      {
        name: "AS",
        bgColor: "bg-yellow-500",
      },
      {
        name: "TB",
        bgColor: "bg-blue-500",
      },
    ],
  },
  {
    listName: "จิ้งจกทอดเกลือ",
    price: 30,
    listPerson: [
      {
        name: "AS",
        bgColor: "bg-yellow-500",
      },
      {
        name: "TB",
        bgColor: "bg-blue-500",
      },
    ],
  },
  {
    listName: "จิ้งจกทอดเกลือ",
    price: 30,
    listPerson: [
      {
        name: "AS",
        bgColor: "bg-yellow-500",
      },
      {
        name: "TB",
        bgColor: "bg-blue-500",
      },
    ],
  },
  {
    listName: "จิ้งจกทอดเกลือ",
    price: 30,
    listPerson: [
      {
        name: "AS",
        bgColor: "bg-yellow-500",
      },
      {
        name: "TB",
        bgColor: "bg-blue-500",
      },
    ],
  },
  {
    listName: "จิ้งจกทอดเกลือ",
    price: 30,
    listPerson: [
      {
        name: "AS",
        bgColor: "bg-yellow-500",
      },
      {
        name: "TB",
        bgColor: "bg-blue-500",
      },
    ],
  },
  {
    listName: "จิ้งจกทอดเกลือ",
    price: 30,
    listPerson: [
      {
        name: "AS",
        bgColor: "bg-yellow-500",
      },
      {
        name: "TB",
        bgColor: "bg-blue-500",
      },
    ],
  },
  {
    listName: "จิ้งจกทอดเกลือ",
    price: 30,
    listPerson: [
      {
        name: "AS",
        bgColor: "bg-yellow-500",
      },
      {
        name: "TB",
        bgColor: "bg-blue-500",
      },
    ],
  },
  {
    listName: "จิ้งจกทอดเกลือ",
    price: 30,
    listPerson: [
      {
        name: "AS",
        bgColor: "bg-yellow-500",
      },
      {
        name: "TB",
        bgColor: "bg-blue-500",
      },
    ],
  },
  {
    listName: "จิ้งจกทอดเกลือ",
    price: 30,
    listPerson: [
      {
        name: "AS",
        bgColor: "bg-yellow-500",
      },
      {
        name: "TB",
        bgColor: "bg-blue-500",
      },
    ],
  },
  {
    listName: "จิ้งจกทอดเกลือ",
    price: 30,
    listPerson: [
      {
        name: "AS",
        bgColor: "bg-yellow-500",
      },
      {
        name: "TB",
        bgColor: "bg-blue-500",
      },
    ],
  },
  {
    listName: "จิ้งจกทอดเกลือ",
    price: 30,
    listPerson: [
      {
        name: "AS",
        bgColor: "bg-yellow-500",
      },
      {
        name: "TB",
        bgColor: "bg-blue-500",
      },
    ],
  },
];
function HomeModal() {
  const [page, setPage] = useState(1);
  const [heightOfScreen, setHeightOfScreen] = useState("100px");
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener("resize", () => {
        setHeightOfScreen(`${(window.innerHeight * 237) / 700}px`);
      });
    }
  }, []);

  return (
    <>
      <div className="absolute bottom-0 z-10  h-full max-h-[60%] w-full max-w-md rounded-[3.5rem] bg-white">
        <Button currentPage={page} setState={setPage} />
        <div className="p-2">
          {page === 1 ? (
            <>
              <AddList />
              {/* <div className="overflow-y-scroll"> */}
              <div className="mt-3 grid grid-cols-12">
                <div className="col-span-8">รายการ</div>
                <div className="col-span-2 text-center">ราคา</div>
                <div className="col-span-2 text-center">คนละ</div>
              </div>
              <div
                className={`mt-2 overflow-y-scroll max-h-[${heightOfScreen}] h-full`}
              >
                <div className=" grid grid-cols-12">
                  {data.map((items, index) => {
                    return (
                      <ShowList
                        key={index}
                        listName={items.listName}
                        price={items.price}
                        listPerson={items.listPerson}
                      />
                    );
                  })}
                </div>
              </div>
              {/* </div> */}
            </>
          ) : (
            <div>2</div>
          )}
        </div>
      </div>
    </>
  );
}

export default HomeModal;
