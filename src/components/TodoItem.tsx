import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTaskCompleted, deleteTask } from '../redux/features/tasksSlice';

interface TodoItemProps {
  id: string;
  title: string;
  createdAt: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, createdAt, completed }) => {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(toggleTaskCompleted({ id }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTask({ id }));
  };

  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`}>
      <span className="todo-title">{title}</span>
      <span className="todo-date">{createdAt}</span>
      <button onClick={handleCompleteClick}>{completed ? 'Undo' : 'Complete'}</button>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
};

export default TodoItem;
