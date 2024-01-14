import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTaskCompleted, deleteTask } from '../redux/features/tasksSlice';
import IconButton from '@mui/material/IconButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface TodoItemProps {
  id: string;
  title: string;
  createdAt: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, createdAt, completed }) => {
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(toggleTaskCompleted({ id }));
  };

  const handleDelete = () => {
    dispatch(deleteTask({ id }));
  };

  return (
    <div className={`flex items-center justify-between p-4 m-2 bg-white rounded shadow-lg ${completed ? 'bg-gray-200' : ''}`}>
      <div className={`flex-grow ${completed ? 'line-through' : ''}`}>
        <span>{title}</span>
        <span className="text-xs text-gray-500 pl-2">{createdAt}</span>
      </div>
      <div>
        <IconButton onClick={handleComplete} color="primary" aria-label="complete task">
          <CheckCircleIcon />
        </IconButton>
        <IconButton color="default" aria-label="edit task">
          <EditIcon />
        </IconButton>
        <IconButton onClick={handleDelete} color="secondary" aria-label="delete task">
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default TodoItem;
