import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/features/tasksSlice';

const AddTodoForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    if (title) {
      dispatch(addTask(title));
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle((e.target as HTMLInputElement).value)}
        placeholder="What needs to be done?"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTodoForm;
