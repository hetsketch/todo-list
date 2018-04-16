import React, {Component} from 'react';
import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="todo">
        <p className="text">{this.props.text}</p>
        <span className="todo__delete-btn">-</span>
      </li>
    );
  }
}

export default Todo;
