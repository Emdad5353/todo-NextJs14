import localforage from 'localforage';

const TODO_STORAGE_KEY = 'todos';

export const getTodos = async () => {
    const todosData = await localforage.getItem(TODO_STORAGE_KEY);
    return todosData ? JSON.parse(todosData) : [];
  };
  
  export const addTodo = async (todo) => {
    const todos = await getTodos();
    todos.push(todo);
    await localforage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos));
  };
  

  export const removeTodo = async (id) => {
    const todos = await getTodos();
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    await localforage.setItem(TODO_STORAGE_KEY, JSON.stringify(filteredTodos));
  };

  export const toggleTodoCompletion = async (id) => {
    const todos = await getTodos();
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    await localforage.setItem(TODO_STORAGE_KEY, JSON.stringify(updatedTodos));
  };