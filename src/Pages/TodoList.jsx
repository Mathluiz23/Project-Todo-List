import React, { useState } from 'react';
import TodoForm from '../components/TodoForm';
import Todo from '../components/Todo';
import '../App.css';
export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [tasksLocalStorage, setTasksLocalStorage] = useState( JSON.parse(localStorage.getItem('tarefa')));
  
    const tasks = tasksLocalStorage;
    localStorage.setItem('tarefa', JSON.stringify(tasks));
  // setTodos(tasksLocalStorage);
  // function getTasksLocalStorage () {
  //   const task = localStorage.getItem('tarefa');
  //   if(task) {
  //       const json = JSON.parse(task);
  //       setTodos(json);
  //   }
  // }
  // useEffect(() => {
  //   getTasksLocalStorage()
  // }, [])
  function addTodo(todo) {
    if (!todo.text) {
      return;
    }
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    setTasksLocalStorage(newTodos);
  };
  function updateTask(todoId, newValue) {
    if (!newValue.text) {
      return;
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    setTasksLocalStorage(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };
  function removeTask(id) {
    const removedArray = [...todos].filter(todo => todo.id !== id);
    setTodos(removedArray);
    setTasksLocalStorage(removedArray);
  };
  function doneTask(id) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTasksLocalStorage(updatedTodos);
  };
  return (
    <>
      <h1>Qual seu planejamento para hoje?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos && tasksLocalStorage}
        doneTask={doneTask}
        removeTask={removeTask}
        updateTask={updateTask}
      />
    </>
  );
}
