import React from 'react';
import { h } from 'preact';
import { useState } from 'preact/hooks';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/features/tasksSlice';
import { useSelector } from 'react-redux';
import { selectAllTasks } from '../redux/features/tasksSlice';
import TodoItem from './TodoItem';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';

const TodoList: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector(selectAllTasks);

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      dispatch(addTask(taskTitle.trim()));
      setTaskTitle(''); // Clear the input after adding the task
    }
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault(); // Prevent the default form submission
    handleAddTask();
  };
  

  return (
    <div className="flex flex-col items-center my-8 mx-4 px-4 py-8 bg-slate-100 sm:my-20 sm:mx-20">
      <h2 className="text-4xl font-bold mb-6 text-slate-500 font-sans sm:text-4xl">TODO LIST</h2>
      <form onSubmit={handleSubmit} className="flex flex-col w-full md:flex-row md:w-3/4 lg:w-1/2 justify-between mb-4 gap-5">
      <TextField
        type="text"
        placeholder="What needs to be done?"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.currentTarget.value)}
        fullWidth
        variant="outlined"
        className="flex-grow"
        autoComplete="off"
      />
        <Button type="submit" variant="contained" color="primary">
          Add Task
        </Button>
      </form>
      {/* Container for the tasks */}
      <div className="w-full md:w-3/4 lg:w-1/2 bg-white rounded shadow">
        {tasks.map(task => (
          <TodoItem
            key={task.id}
            id={task.id}
            title={task.title}
            createdAt={task.createdAt}
            completed={task.completed}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
