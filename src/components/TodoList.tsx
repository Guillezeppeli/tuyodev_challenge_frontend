import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllTasks } from '../redux/features/tasksSlice';
import TodoItem from './TodoItem';
import Button from '@mui/material/Button'

const TodoList: React.FC = () => {
  const tasks = useSelector(selectAllTasks);

  return (
    <div className="flex flex-col items-center justify-center font-opensans bg-slate-100 mx-5 my-5">
      <h2 className="title text-3xl text-gray-500 my-4 font-bold">TODO LIST</h2>
      <Button variant="text">Text</Button>
      <div className="w-full sm:w-2/3 md:w-1/2">    
        {tasks.map((task) => (
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
