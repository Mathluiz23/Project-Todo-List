import './App.css';
import TodoList from './Pages/TodoList';
import { Routes, Route} from 'react-router-dom';
import Login from './Pages/Login';

function App() {
  return (
    <div className='todo-app'>
      <Routes>
        <Route path="/todolist" element={<TodoList />}/>
        <Route exatc path="/" element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
