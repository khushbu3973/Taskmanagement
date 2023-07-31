import React, { useState } from 'react';


const TaskCreationPage = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, dueDate });
    setTitle('');
    setDescription('');
    setDueDate('');
  };

 


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </label>
      <label>
        Due Date:
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
      </label>
      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskCreationPage;