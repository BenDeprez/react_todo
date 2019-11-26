import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

// todo array
class App extends Component {
  state = {
    todos: [
    {
      id: 1,
      title: 'Take out trash',
      completed: false
    },
    {
      id: 2,
      title: 'Dinner',
      completed: false
    },
    {
      id: 3,
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

  // delete todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  render() {
    return (
      <div className="App">
        <Todos 
          todos={this.state.todos} 
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
