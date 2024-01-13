// src/pages/Home/App.tsx

import { h } from 'preact';
import AddTodoForm from '../../components/AddTodoForm';
import TodoList from '../../components/TodoList';

const App = () => {
  return (
    <div>
      <h1>TODO LIST</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
};

export default App;


