import React, {Component} from 'react';
import './NewTodo.css';

class NewTodo extends Component {
  constructor(props) {

    super(props);
    this.state = {
      text: ''
    };
    this.change = this.change.bind(this);
  }

  change(e) {
    this.setState({text: e.target.value});
  }

  addTodo() {
    let text = this.state.text;

    if (text.length > 0) {
      this.props.handler(text);
      this.state.text = '';
    }
  }

  render() {
    let {text} = this.state;
    return (
      <div className="add-todo">
        <input placeholder="New todo" type="text" value={text} className="add-todo__input"
               onChange={this.change}/>
        <button className="add-todo__btn"
                onClick={this.addTodo.bind(this)}></button>
      </div>
    );
  }
}

export default NewTodo;
