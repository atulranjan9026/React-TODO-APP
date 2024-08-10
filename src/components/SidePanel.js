import React from 'react';
import './SidePanel.css';
import profileImage from '../assets/a-generic-user-avatar-with-a-simple-design.svg';
import taskIcon from '../assets/hugeicons_task-01.svg';
import calendarIcon from '../assets/calendar.svg';
import starIcon from '../assets/ph-star.svg';
import planIcon from '../assets/carbon-plan.svg';
import assignIcon from '../assets/iwwa-assign.svg';
import addIcon from '../assets/menu.svg';
import DonutChart from './DonutChart';

const SidePanel = () => {
    return (
        <div className="side-panel">
            <div className="profile">
                <img src={profileImage} alt="Profile" className="profile-image" />
                <span className="profile-label">Hey, ABCD</span>
            </div>
            <div className="menu-section">
                <MenuItem icon={taskIcon} label="All Tasks" />
                <MenuItem icon={calendarIcon} label="Today" active />
                <MenuItem icon={starIcon} label="Important" />
                <MenuItem icon={planIcon} label="Planned" />
                <MenuItem icon={assignIcon} label="Assigned to me" />
            </div>
            <div className="menu-section">
                <MenuItem icon={addIcon} label="Add list" />
            </div>
            <div className="donut-chart-section">
                <DonutChart />
            </div>
        </div>
    );
};

const MenuItem = ({ icon, label, active }) => {
    return (
        <div className={`menu-item ${active ? 'active' : ''}`}>
            <img src={icon} alt={label} className="menu-icon" />
            <span className="menu-label">{label}</span>
        </div>
    );
};

export default SidePanel;
