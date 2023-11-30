import React from 'react';
import { getTodos, removeTodo, toggleTodoCompletion} from '../services/dataServices'

const TodoList = () => {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    const fetchTodos = async () => {
      const fetchedTodos = await getTodos();
      setTodos(fetchedTodos);
    };
    fetchTodos();
  }, []);

  const handleRemoveTodo = (id) => {
    removeTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleTodoCompletion = (id) => {
    toggleTodoCompletion(id);
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }));
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className={`todo ${todo.completed ? 'completed' : ''}`}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleToggleTodoCompletion(todo.id)}
          />
          <span>{todo.title}</span>
          <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
