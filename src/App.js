import React, { Component } from 'react';
import TodoInput from './containers/todoInput';
import TodoList from './containers/todoList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoInput />
        <TodoList />
      </div>
    );
  }
}

export default App;
