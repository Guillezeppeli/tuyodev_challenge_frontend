import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllTasks } from '../redux/features/tasksSlice';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const tasks = useSelector(selectAllTasks);

  return (
    <div className="todo-list">
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
  );
};

export default TodoList;
