// TaskList.js
import React, { useState } from 'react';
import tasksData from './data';

const TaskList = () => {
  const [tasks, setTasks] = useState(tasksData);

  const handleCheckboxChange = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className='container'>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleCheckboxChange(task.id)}
              />
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.name}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
