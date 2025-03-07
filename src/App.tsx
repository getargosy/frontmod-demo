import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TodoList from './components/TodoList';
import Settings from './components/Settings';

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
    <Router>
      <div className='app'>
        <nav>
          <ul>
            <li>
              <Link to='/'>Todo List</Link>
            </li>
            <li>
              <Link to='/settings'>Settings</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/'>
            <Route
              index
              element={
                <>
                  <h1>Todo List</h1>
                  <TodoList todos={todos} setTodos={setTodos} />
                  <button onClick={() => addTodo('New Todo')}>Add Todo</button>
                </>
              }
            />
            <Route path='settings' element={<Settings />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
