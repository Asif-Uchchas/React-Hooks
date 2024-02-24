'use client'
import React, { useState } from "react";

const UseStatePractice = () => {
    const [count, setCount] = useState(0)

const addcount = () => {
        setCount(previouscount => previouscount + 1)
    }

    const decresecount = () => {
        setCount(previouscount => previouscount - 1)
    }


  return (
    <div className="w-full h-full flex justify-center items-center p-10">
          <button className=" w-10 p-3 m-2 border bg-green-700"
              onClick={addcount}
          >+</button>
      <span className=" w-10 p-3 m-2 border text-xl">{count}</span>
          <button className=" w-10 p-3 m-2 border bg-red-700"
                onClick={decresecount}
          >-</button>
    </div>
  );
};

export default UseStatePractice;
