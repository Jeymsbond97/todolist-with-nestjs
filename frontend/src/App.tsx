import React from 'react';
import TodoList from './components/TodoList';
import { useTodos } from './hooks/useTodos';
import './styles/index.css';

const App: React.FC = () => {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodos();

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList todos={todos} onUpdate={updateTodo} onDelete={deleteTodo} />
      {/* Add functionality to add new todos here */}
    </div>
  );
};

export default App;