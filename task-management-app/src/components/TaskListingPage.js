import React from 'react';

const TaskListingPage = ({ tasks ,handleDelete,handleEdit}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.dueDate}</td>
            <td>{task.status}</td>
            <td>
              <button onClick={() => handleEdit(task.id)}>Edit</button>
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskListingPage;