// src/store/actions.js
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';

export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task,
});

export const deleteTask = (index) => ({
    type: DELETE_TASK,
    payload: index,
});

export const editTask = (index, newText) => ({
    type: EDIT_TASK,
    payload: { index, newText },
});

export const TOGGLE_TASK_COMPLETION = 'TOGGLE_TASK_COMPLETION';

export const toggleTaskCompletion = (index) => ({
    type: TOGGLE_TASK_COMPLETION,
    payload: index,
});