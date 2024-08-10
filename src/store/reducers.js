// src/store/reducers.js

import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK_COMPLETION } from './actions';

const initialState = {
    tasks: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((_, index) => index !== action.payload),
            };
        case EDIT_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task, index) =>
                    index === action.payload.index ? { ...task, text: action.payload.newText } : task
                ),
            };
        case TOGGLE_TASK_COMPLETION:
            return {
                ...state,
                tasks: state.tasks.map((task, index) =>
                    index === action.payload ? { ...task, completed: !task.completed } : task
                ),
            };
        default:
            return state;
    }
};

export default rootReducer;
