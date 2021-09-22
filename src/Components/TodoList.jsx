import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, checkTodo, deleteTodo }) => {
    return (
        <div>
            {todos.length > 0 && todos.map((todo) => (
                <Todo key={todo.id}
                    title={todo.title}
                    checkTodo={checkTodo}
                    id={todo.id}
                    isCompleted={todo.isCompleted}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div >
    );
};

export default TodoList;
