import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import AddTask from "./Components/AddTask";
import Todolist from "./Components/Todolist";
import Updatetsak from "./Components/Updatetsak";

function App() {
  const [todolist, setTodolist] = useState([]);
  const [tasktoUpdate, setTasktoUpdate] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/task")
      .then((res) => {
        setTodolist(res.data);
      })
      .catch((err) => {
        console.log(err.meaasge);
      });
  }, []);

  const addTask = (newTask) => {
    setTodolist([...todolist, newTask]);
  };

  const taskComplete = (task) => {
    const newlist = [...todolist];
    newlist.forEach((item) => {
      if (item._id === task._id) {
        item.isComplete = task.isComplete;
      }
    });
    setTodolist(newlist);
  };

  const removetask = (task) => {
    const newlist = todolist.filter((item) => !(item._id === task._id));
    setTodolist(newlist);
  };

  const updatetask = (task) => {
    const newlist = [...todolist];
    newlist.forEach((item) => {
      if (item._id === task._id) {
        item.todo = task.todo;
      }
    });
    setTodolist(newlist);
  };
  return (
    <div>
      <AddTask addTask={addTask} />
      <Todolist
        todolist={todolist}
        taskComplete={taskComplete}
        removetask={removetask}
        tasktoUpdate={(task) => setTasktoUpdate(task)}
        showPopup={() => setShowPopup(!showPopup)}
      />
      {showPopup && (
        <Updatetsak
          task={tasktoUpdate}
          updatetask={updatetask}
          removePopup={() => setShowPopup(!showPopup)}
        />
      )}
    </div>
  );
}

export default App;
