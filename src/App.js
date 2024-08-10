import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SidePanel from "./components/SidePanel";
import MainContent from "./components/MainContent";
import TaskDetail from "./components/TaskDetail";
import "./App.css";

const App = () => {
  const [sidePanelVisible, setSidePanelVisible] = useState(true);
  const [isTaskDetailOpen, setTaskDetailOpen] = useState(false);
  const [isGridActive, setIsGridActive] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleMenuClick = () => {
    setSidePanelVisible(!sidePanelVisible);
  };

  const handleGridToggle = () => {
    setIsGridActive(!isGridActive);
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setTaskDetailOpen(true);
  };

  const handleCloseTaskDetail = () => {
    setTaskDetailOpen(false);
    setSelectedTask(null);
  };

  const handleDeleteTask = () => {
    // Handle task deletion logic here
    setTaskDetailOpen(false);
    setSelectedTask(null);
  };

  return (
    <div className="app">
      <Navbar onMenuClick={handleMenuClick} onGridToggle={handleGridToggle} />
      <div className="app__body">
        {sidePanelVisible && <SidePanel isVisible={sidePanelVisible} />}
        <MainContent
          isGridActive={isGridActive}
          onTaskClick={handleTaskClick} // Pass the function to handle task click
        />
        {isTaskDetailOpen && selectedTask && (
          <TaskDetail
            task={selectedTask}
            onClose={handleCloseTaskDetail}
            onDelete={handleDeleteTask}
          />
        )}
      </div>
    </div>
  );
};

export default App;
