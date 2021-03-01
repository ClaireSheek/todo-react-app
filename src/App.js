import React, { Component } from 'react';
import './App.css';
import './components/ToDoCard'
import ToDoCard from './components/ToDoCard';

class App extends Component{
constructor(props) {
  super(props)

  this.state = {
    inputValue: "",
    listOfTodos: ["Example"],
  }
}

handleChange = (e) => {
  this.setState({inputValue: e.target.value})
}

handleSubmit = (e) => {
  e.preventDefault()
  this.setState({listOfTodos: [...this.state.listOfTodos, this.state.inputValue]})
  this.setState({inputValue: ""})
}

deleteTodo = (index) => {
 console.log(index, " clicked")
 this.state.listOfTodos.splice(index, 1)
 this.setState({listOfTodos: [...this.state.listOfTodos]})
 console.log(this.state.listOfTodos)
}

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>To-Do List</h1>
        </header>
        <div className="list">
          <form onSubmit={this.handleSubmit}>
            <input 
              type="text" 
              placeholder="Add New To-Do"
              value={this.state.inputValue}
              onChange={this.handleChange}
              >
            </input>
            <button type="submit">Add</button>
            <h3>{this.state.inputValue}</h3>
          </form>
          <ol>
          {this.state.listOfTodos.map((todo, index) => {
            return <ToDoCard 
              key={index} 
              index={index}
              title={todo} 
              clickToRemove={this.deleteTodo}
              />
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default App;
