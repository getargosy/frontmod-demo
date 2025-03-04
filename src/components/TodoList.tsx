// Intentional ESLint violations:
// 1. Missing parameter type annotations
// 2. Using 'any' type
// 3. Missing return type annotation
// 4. Unnecessary type assertion
const TodoList = ({ todos, setTodos }) => {
  const toggleTodo = (id) => {
    const newTodos = todos.map((todo: any) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos as any[]);
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
