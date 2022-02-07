import "./Todolist.css";
import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";

function Todolist(props) {
  const todolist = props.todolist.map((task, index) => {
    const taskcomplete = (task) => {
      axios
        .put(`http://localhost:5000/api/task/${task._id}`, {
          _id: task._id,
          todo: task.todo,
          isComplete: !task.isComplete,
        })
        .then((res) => props.taskComplete(res.data))
        .catch((err) => console.log(err.message));
    };
    const removetask = (id) => {
      axios
        .delete(`http://localhost:5000/api/task/${id}`)
        .then((res) => props.removetask(res.data))
        .catch((err) => console.log(err.message));
    };
    return (
      <li key={index}>
        <div style={{ display: "flex" }}>
          <CheckIcon className={task.isComplete ? "isComplete" : "checkiocn"} />
          <p
            className={task.isComplete ? "completed" : ""}
            onClick={() => {
              taskcomplete(task);
            }}
          >
            {task.todo}
          </p>
        </div>
        <div>
          <EditIcon
            className="edit"
            onClick={() => {
              props.tasktoUpdate(task);
              props.showPopup();
            }}
          />
          <CloseIcon
            className="close"
            onClick={() => {
              removetask(task._id);
            }}
          />
        </div>
      </li>
    );
  });

  return (
    <div className="tasklist">
      <ul>{todolist}</ul>
    </div>
  );
}

export default Todolist;
