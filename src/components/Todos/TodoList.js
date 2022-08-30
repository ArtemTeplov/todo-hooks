import Todo from "./Todo";

import styles from './TodoList.module.css';

function TodoList({ todos, deleteTodo, toggleTodo }) {
    return (
        <div className={styles.todoListContainer}>
            {!todos.length && <h2>Todos is empty</h2>}
            {todos.map((todo) => <Todo key={todo.id} todo={todo} id={todo.id} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>)}
        </div>
    )}

export default TodoList;