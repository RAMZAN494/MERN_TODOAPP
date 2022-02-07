import axios from "axios";
import React, { useState } from "react";
import "./AddTask.css";


function AddTask(props) {
  const [task, Settask] = useState("");
  const addtask = () => {
    if (task.trim() === "") {
    } else {
      axios
        .post("http://localhost:5000/api/task", {
          todo: task,
          isComplete: false,
        })
        .then((res) => {
          Settask("");
          props.addTask(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  return (
    <div className="addtask">
      <input
        type="text"
        placeholder="Add New Todo...."
        value={task}
        onChange={(event) => Settask(event.target.value)}
      />
      <button onClick={() => addtask()}>Add Todo</button>
      <div></div>
    </div>
  );
}

export default AddTask;
