import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../store/actions";
import "./MainContent.css";
import TaskItem from "./TaskItem";
import caretDownIcon from "../assets/caret-down.svg";
import calendarIcon from "../assets/iconoir-calendar.svg";
import repeatIcon from "../assets/bi-repeat.svg";
import notificationIcon from "../assets/clarity-notification-line.svg";

const MainContent = ({ isGridActive, onTaskClick }) => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(false);

  const activeTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  const handleAddTask = () => {
    if (task.trim()) {
      const newTask = { text: task, completed: false, important: false };
      dispatch(addTask(newTask));
      setTask("");
    }
  };

  const toggleInputVisibility = () => {
    setIsInputVisible(!isInputVisible);
  };

  return (
    <div className="main-content">
      <div className="main-content__title">
        <div
          onClick={toggleInputVisibility}
          className="main-content__title-button"
        >
          <span className="main-content__title-text">To Do</span>
          <img
            src={caretDownIcon}
            alt="Caret Down"
            className={`main-content__icon ${isInputVisible ? "open" : ""}`}
          />
        </div>
      </div>

      <div className="from">
        {isInputVisible && (
          <div className="container">
            <input
              type="text"
              value={task}
              className="main-content__input"
              onChange={(e) => setTask(e.target.value)}
              placeholder="Add A Task"
              onKeyPress={(e) => e.key === "Enter" && handleAddTask()}
            />
            <div className="icon-container">
              <div className="icons">
                <div className="main-content__icons">
                  <img
                    src={notificationIcon}
                    alt="Notification"
                    className="main-content__icon"
                  />
                  <img
                    src={repeatIcon}
                    alt="Repeat"
                    className="main-content__icon"
                  />
                  <img
                    src={calendarIcon}
                    alt="Calendar"
                    className="main-content__icon"
                  />
                </div>
              </div>

              <div className="add-task-container">
                <div onClick={handleAddTask} className="add-task-button">
                  Add Task
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="main-content__tasks">
        <div className={`main-tasks ${isGridActive ? "grid" : ""}`}>
          {activeTasks.map((task, index) => (
            <TaskItem
              key={index}
              index={index}
              task={task}
              isGridActive={isGridActive}
              onTaskClick={onTaskClick} // Pass the click handler to each TaskItem
            />
          ))}
        </div>
        <h3 className="main-content__completed-title">Completed</h3>
        {completedTasks.map((task, index) => (
          <TaskItem
            key={index}
            index={index}
            task={task}
            isGridActive={isGridActive}
            onTaskClick={onTaskClick} // Pass the click handler to each TaskItem
          />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
