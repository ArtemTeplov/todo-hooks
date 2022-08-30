import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosActions from './components/Todos/TodosActions';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isComplited: false,
      id: uuidv4()
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoHandler = (id) => {
    setTodos(todos.map((todo) => {
      return todo.id === id 
      ? {...todo, isComplited: !todo.isComplited} 
      : {...todo}
    }))
  } 

  const resetTodosHandler = () => {
    return setTodos([])
  }

  const deleteCompletedTodosHandler = () => {
    return setTodos(todos.filter((todo) => !todo.isComplited))
  }

  const complitedTodosCount = todos.filter((todo) => todo.isComplited).length

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler}/>
      {!todos.length ? null : <TodosActions 
                                resetTodos={resetTodosHandler} 
                                deleteComplited={deleteCompletedTodosHandler} 
                                complitedTodosExist={!!complitedTodosCount}/>}
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} toggleTodo={toggleTodoHandler}/>
      {complitedTodosCount ? <h2>{`You have complited ${complitedTodosCount} ${complitedTodosCount > 1 ? 'todos' : 'todo'}`}</h2> : null}
    </div>
  );
}

export default App;
