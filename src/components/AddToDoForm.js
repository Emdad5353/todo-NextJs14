import React, { useState } from 'react';
import { addTodo } from '@/services/dataServices';

const AddTodoForm = () => {
  const [newTodoTitle, setNewTodoTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newTodoTitle.trim()) {
      addTodo({
        id: Math.random().toString(36).substring(2, 9),
        title: newTodoTitle,
        completed: false,
      });
      setNewTodoTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Add Todo:</label>
      <input
        type="text"
        value={newTodoTitle}
        onChange={(event) => setNewTodoTitle(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
