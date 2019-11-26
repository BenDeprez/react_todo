import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './components/pages/About'
import Header from './components/layout/Header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';
import axios from 'axios';

// todo array
class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data}))
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
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: title,
      completed: false
    })
    .then(res => this.setState({
      todos: [...this.state.todos, res.data]
    })
  )
    
  }

  // delete todo
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      }))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
          <Header />

          {/* main page route */}
          <Route exact
            path='/'
            render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos 
                  todos={this.state.todos} 
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}
                />
              </React.Fragment>
            )}
          />

          {/* about page route */}
          <Route
            path='/about'
            component={About}
          />

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
