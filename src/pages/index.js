import React from 'react';
import TodoList from '@/components/ToDoList.js';
import AddTodoForm from '@/components/AddToDoForm.js';

const Home = () => {
  return (
    <div>
      <h1>TODO App</h1>
      <TodoList />
      <AddTodoForm />
    </div>
  );
};

export default Home;
