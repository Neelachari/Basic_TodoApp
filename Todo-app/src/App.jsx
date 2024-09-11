import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');



  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleEditTodo = (index) => {
    setEditIndex(index);
    setEditText(todos[index]);
  };

  const handleSaveEdit = () => {
    const updatedTodos = [...todos];
    updatedTodos[editIndex] = editText;
    setTodos(updatedTodos);
    setEditIndex(null);
    setEditText('');
  };

  return (
    <div className="app">
      <h1>Todo App</h1>

      <div className="add-todo">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Task</button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {editIndex === index ? (
              <div className="edit-todo">
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Save</button>
              </div>
            ) : (
              <div className="todo-item">
                <span>{todo}</span>
                <button onClick={() => handleEditTodo(index)}>Edit</button>
                <button onClick={() => handleDeleteTodo(index)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
