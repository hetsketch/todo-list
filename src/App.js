import React, {Component} from 'react';
import Todo from './Todo';
import NewTodo from './NewTodo';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectName: 'TODO List',
      todos: ['Clean home', 'Do the washing up', 'Close the door']
    };

    this.updateTodoList = this.updateTodoList.bind(this);
  }

  updateTodoList(todo) {
    this.setState({todos: this.state.todos.concat([todo])});
  }

  deleteTodo(index) {

  }

  render() {
    const todoList = this.state.todos.map(todo => <Todo text={todo}/>);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.projectName}</h1>
        </header>
        <ul className="todo-list">
          {todoList}
        </ul>
        <NewTodo handler={this.updateTodoList}/>
      </div>
    );
  }
}

export default App;
