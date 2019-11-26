import React, { Component } from 'react';
import Header from './components/layout/Header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid'
import './App.css';

// todo array
class App extends Component {
  state = {
    todos: [
    {
      id: uuid.v4(),
      title: 'Take out trash',
      completed: false
    },
    {
      id: uuid.v4(),
      title: 'Dinner',
      completed: false
    },
    {
      id: uuid.v4(),
      title: 'meeting with Bob',
      completed: false
    },
  ]
  }

  // toggle todo as completed/!completed
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  // delete todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  render() {
    return (
      <div className="App">

        <div className="container">
        <Header />
        <AddTodo addTodo={this.addTodo}/>
        <Todos 
          todos={this.state.todos} 
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
        </div>
    
      </div>
    );
  }
}

export default App;
