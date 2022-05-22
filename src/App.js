import './App.css';
import TodoList from './Pages/TodoList';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';

function App() {
  return (
    <div className='todo-app'>
      <Routes>
        <Route path="/todo-list/task" element={<TodoList />}/>
        <Route path="/todo-list" element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
