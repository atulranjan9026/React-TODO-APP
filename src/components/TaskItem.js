import React from "react";
import { useDispatch } from "react-redux";
import { toggleTaskCompletion } from "../store/actions";
import "./TaskItem.css";
import starIcon from "../assets/ph-star.svg";

const TaskItem = ({ task, index, isGridActive, onTaskClick }) => {
  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    dispatch(toggleTaskCompletion(index));
  };

  return (
    <div
      className={`task-item ${task.completed ? "completed" : "NotCompleted"} ${
        isGridActive ? "grid-active" : ""
      }`}
    >
      <div
        className={`task-item__checkbox ${
          isGridActive ? "grid-checkbox" : ""
        }`}
      >
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className="task-item__content">
        <div className="task-item__text" onClick={() => onTaskClick(task)}>
          {task.text}
        </div>
        <div className="task-item__star">
          <img src={starIcon} alt="Star icon" className="task-item__icon" />
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
