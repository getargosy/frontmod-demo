import { useState } from 'react';
import TodoList from './components/TodoList';

// Intentional ESLint violations:
// 1. Missing return type annotation
// 2. Using 'any' type
// 3. Unused variable
// 4. Console log usage
const App = () => {
  const [todos, setTodos] = useState<any[]>([]);
  const unusedVar = 'This will trigger a warning';

  console.log('Rendering App component');

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  return (
    <div className='app'>
      <h1>Todo List</h1>
      <TodoList todos={todos} setTodos={setTodos} />
      <button onClick={() => addTodo('New Todo')}>Add Todo</button>
    </div>
  );
};

export default App;
