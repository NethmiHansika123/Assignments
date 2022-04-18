import React, { useState } from "react";
import Showtodo from "./showtodo";
import "../todolist/todolist.css";

export default function Todo() {
  const [task, setTask] = useState("add some task");
  const [data, setData] = useState(["task1", "task2"]);

  const onChangeHandler = (e) => {
    console.log(5434,e.target.value , "test");
    setTask(e.target.Value);
  };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log(55555,task)
//     let current = task; 
//     setData([...data, current]);
//     setTask("");
//   };
  const deleteItem = (a) => {
    const finaldata = data.filter((curEle, index) => {
      return index !== a;
    });
    setData(finaldata);
  };


  return (
    <div className="container">
      <form>
        <input type="text" value={task} onChange={onChangeHandler} />
        <button onClick={(e)=>{
            e.preventDefault();
            console.log(55555,task)
            let current = task; 
            setData([...data, current]);
            setTask("");
        }}>+</button>
      </form>

      {data.map((value, index) => {
        console.log(333, value);
        return (
          <Showtodo key={index} id={index} task={value} onSelect={deleteItem} />
        );
      })}
    </div>
  );
}
