// src/pages/Home/App.tsx

import { h } from 'preact';
import AddTodoForm from '../../components/AddTodoForm';
import TodoList from '../../components/TodoList';

const App = () => {
  return (
    <div>
      <AddTodoForm />
      <TodoList />
    </div>
  );
};

export default App;


