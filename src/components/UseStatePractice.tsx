"use client";
import { title } from "process";
import React, { useState } from "react";

const UseStatePractice = () => {
  // for 1. Count
  const [count, setCount] = useState(0);
  // for 2. Controlled Input Field
  const [text, setText] = useState("TODO");
  // for 3. Toggle Visibility
  const [visible, setVisible] = useState(true);
  // for  4. Character Counter
  const [texts, setTexts] = useState("TODO");
  // for 5. Todo List
  const [title, setTitle] = useState("");
  //
  const [color, setColor] = useState("");

  // for 1. Count
  const addcount = () => {
    setCount((previouscount) => previouscount + 1);
  };

  const decresecount = () => {
    setCount((previouscount) => previouscount - 1);
  };

  // for 2. Controlled Input Field
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // for 4. Character Counter
  const handleTextChange = (e) => {
    setTexts(e.target.value);
  };

  // for 5. Todo List
  const addEvent = (e) => {
    setTitle(e.target.value);
  };

  // for 6. Color Switcher
  const changeColor = (e) => {
    setColor(e.target.value);
  };



  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-10">
      <div className="mt-10 flex items-center">
        <h2 className="text-2xl">1. Count</h2>
        <button
          className=" w-10 p-3 m-2 border bg-green-700"
          onClick={addcount}
        >
          +
        </button>
        <span className=" w-10 p-3 m-2 border text-xl">{count}</span>
        <button
          className=" w-10 p-3 m-2 border bg-red-700"
          onClick={decresecount}
        >
          -
        </button>
      </div>
      <div className="mt-10">
        <h2 className=" text-2xl">2. Controlled Input Field</h2>
        <input type="text" className="mt-4" onChange={handleChange} />
        <p className="mt-4">Input text: {text}</p>
      </div>
      <div className="mt-10 flex flex-col items-center">
        <h2 className=" text-2xl">3. Toggle Visibility</h2>
        <button
          className=" w-40 p-3 m-2 border bg-slate-400"
          onClick={() => setVisible(!visible)}
        >
          {visible ? "Hide Text" : "Show Text"}
        </button>
        {visible && <p className="mt-4">Toggle me!</p>}
      </div>
      <div className="mt-10">
        <h2 className=" text-2xl">4. Character Counter</h2>
        <textarea onChange={handleTextChange} className=" text-black" />
        <p>Character count: {texts.length}</p>
      </div>
      <div className="mt-10 flex flex-col items-center">
        <h2 className=" text-2xl">5. Todo List</h2>
        <input type="text" className="mt-4 text-black" />
        <button
          className=" w-30 p-3 m-2 mt-5 border bg-slate-400"
          onClick={addEvent}
        >
          Add Todo
        </button>
        <ul className="mt-5">
          <li>
            <p className=" p-3 m-3 w-auto bg-white text-black">{title}</p>
          </li>
        </ul>
      </div>
      <div className="mt-10 ">
        <h2 className=" text-2xl">6. Color Switcher</h2>
        <div className="text-black">
          <select onChange={changeColor}>
            <option value="">Select a color</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
          </select>
          <div className={` w-40 h-40 bg-${color}-700`}>Hi</div>
          <div className=" bgblu"></div>

        </div>
      </div>
    </div>
  );
};

export default UseStatePractice;
