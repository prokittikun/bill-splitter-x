import React, { useCallback, useEffect, useState } from "react";
import Button from "./Button/Button";

function HomeModal() {
  const [page, setPage] = useState(false);
  const handlePage = () => {
    console.log("hello");
  };//todo
  useEffect(() => {
    console.log(page);
  }, [page]);

  return (
    <>
      <div className="absolute bottom-0 z-10 h-full max-h-[60%] w-full max-w-md rounded-[3.5rem] bg-white">
        <Button name="test" /> 
      </div>
    </>
  );
}

export default HomeModal;
