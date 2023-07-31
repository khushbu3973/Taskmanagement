import React from 'react';

const TaskDetail = ({ task, onEdit, onDelete }) => {
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Status: {task.status}</p>
      <button onClick={() => onEdit(task.id)}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskDetail;