import React, { useState } from 'react';
import { v4 } from 'uuid';
import { Container, Card, CardContent, Typography, IconButton } from '@material-ui/core';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const checkTodo = (id) => {
    console.log(checkTodo);
    setTodos(todos.map((todo) => {
      if (todo.id === id) todo.isCompleted = !todo.isCompleted;
      console.log(todo.isCompleted);
      return todo;
    }))
  }

  const deleteTodo = (id) => {
    console.log(deleteTodo);
    setTodos(todos.filter((todo => todo.id !== id)));
  };

  const addTodo = (text) => {
    const { todo, category } = text
    const newTodo = {
      id: v4(),
      title: todo,
      category,
      isCompleted: false
    };
    console.log({ newTodo })
    setTodos([...todos, newTodo])

  };


  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  function groupBy(objectArray, property) {
    return objectArray.reduce((acc, obj) => {
      const key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      // Add object to list for given key's value
      acc[key].push(obj);
      return acc;
    }, {});
  }

  const renderCategory = (category) => {
    return groupCategories[category].length ? groupCategories[category].map(item => {
      return (<Card Variant="outlined" style={{ marginTop: 5, background: "#c000ff", width: 1250, marginLeft: 180 }} >
        <CardContent>
          <Typography Variant="h5" component="h2">
            {item.title}
          </Typography>
        </CardContent>

      </Card >)
    }) : ''
  }

  const groupCategories = groupBy(todos, 'category');
  console.log({ groupCategories })

  const todoData = todos.filter(todo => todo.title.includes(searchTerm));
  return (
    <div>
      <TodoForm
        addTodo={addTodo}
        handleSearch={handleSearch}
      />
      <TodoList
        todos={todoData}
        checkTodo={checkTodo}
        deleteTodo={deleteTodo}
      />
      <div>
        <h2>Category:</h2>
        {Object.keys(groupCategories).length ? Object.keys(groupCategories).map(category => {

          return (<>
            <h2>{category}</h2>
            {renderCategory(category)}
          </>)

        }) : ''}
      </div>
    </div>
  )
}
export default App;