import React, { useState } from 'react';
import './TaskDetail.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import checkboxIcon from '../assets/state-layer.svg';
import starIcon from '../assets/ph-star-3.svg';
import addStepIcon from '../assets/menu.svg';
import reminderIcon from '../assets/clarity_notification-line.svg';
import dueDateIcon from '../assets/iconoir-calendar.svg';
import repeatIcon from '../assets/bi-repeat.svg';
import closeIcon from '../assets/Vector.svg';
import deleteIcon from '../assets/material-symbols-dark-delete.svg';

const TaskDetail = ({ task, onClose, onDelete }) => {
    const [dueDate, setDueDate] = useState(null); // State for due date

    return (
        <div className="task-detail-container">
            <div className="task-detail">
                <div className="task-detail-header">
                    <img src={checkboxIcon} alt="Checkbox" />
                    <span className="task-detail-title">{task.text}</span>
                    <img src={starIcon} alt="Star" className="task-detail-icon" />
                </div>

                <div className="task-detail-body">
                    <DetailRow icon={addStepIcon} label="Add Step" />
                    <DetailRow icon={reminderIcon} label="Set Reminder" />
                    <div className="task-detail-row">
                        <img src={dueDateIcon} alt="Add Due Date" className="task-detail-row-icon" />
                        <span className="task-detail-row-label"></span>
                        <DatePicker
                            selected={dueDate}
                            onChange={(date) => setDueDate(date)}
                            dateFormat="MMMM d, yyyy"
                            className="task-detail-datepicker"
                            placeholderText="Add Due Date"
                        />
                    </div>
                    <DetailRow icon={repeatIcon} label="Repeat" />
                    <div className="task-detail-add-notes">
                        <span className='addNotes'>Add Notes</span>
                    </div>
                </div>

                <div className="task-detail-footer">
                    <img src={closeIcon} alt="Close" onClick={onClose} />
                    <span>Created Today</span>
                    <img src={deleteIcon} alt="Delete" onClick={onDelete} />
                </div>
            </div>
        </div>
    );
};

const DetailRow = ({ icon, label }) => {
    return (
        <div className="task-detail-row">
            <img src={icon} alt={label} className="task-detail-row-icon" />
            <span className="task-detail-row-label">{label}</span>
        </div>
    );
};

export default TaskDetail;
