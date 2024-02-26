'use client'
import { describe } from "node:test";
import React, { useState } from "react";

 type task = {
    title: string;
    description: string;
}
const TodoList = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState<task[]>([]);

  const handleTask = (e: React.FormEvent) => {
    e.preventDefault();
    setTasks([...tasks, {title, description}])
    setTitle("");
      setDescription("");
      console.log(tasks)
  };

 const renderTask = tasks.map((task,index) => (
    <li key={index}> {task.title} - {task.description}</li>
))

  return (
    <div className="flex justify-center items-center flex-col">
      <form action="" onSubmit={handleTask}>
        <input
          type="text"
          name="task_title"
          className=" m-5 border border-b-black rounded p-2 text-xl text-black"
          placeholder="Add Task Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          name="task_description"
          className=" m-5 border border-b-black rounded p-2 text-xl text-black"
          placeholder="Add Task Description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />{" "}
        <br />
        <button type="submit" className=" m-5 p-2 bg-blue-500 rounded-lg">
          Submit
        </button>
      </form>
      <div className=" bg-slate-600 p-8">
              <ul>{tasks.length > 0 && renderTask}</ul>
      </div>
    </div>
  );
};

export default TodoList;
