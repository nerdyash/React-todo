import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Layouts/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import About from './components/Pages/About';
import axios from 'axios';

// import uuid from 'uuid';

class App extends React.Component {
  state = {
    todos: []
  }
  // http get request
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos: res.data}))
  }
  // Toggle Complete
  markComplete = (id) => {
   this.setState({todos: this.state.todos.map( (todo) => {
     if(todo.id === id) {
       todo.completed = !todo.completed
     }
     return todo
   })})
  }
  // Delete Todo
  deleteTodo = (id) => {
    // this.setState({todos: [...this.state.todos.filter((todo) => todo.id !== id)]});

    // delete from the server
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({todos: [...this.state.todos.filter((todo) => todo.id !== id)]}))
  }
  // Add Todo
  addTodo = (title) => {
    // const newTodo = {
    //   id: uuid.v4(),
    //   title,
    //   completed: false
    // }
    // this.setState({todos: [...this.state.todos, newTodo]});

    // http request
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    }).then(res => this.setState({todos: [...this.state.todos, res.data]}));
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className='container'>
            <Header />
            <Route exact path='/' render= {props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
              </React.Fragment>
            )} />
            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
