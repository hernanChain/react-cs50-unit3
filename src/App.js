import React, { Component } from "react";

let id = 0;

const Todo = props => {
  return (
    <li>
      <input
        onChange={props.onChecked}
        checked={props.todo.checked}
        type="checkbox"
      />
      <button onClick={props.onDelete}>Delete</button>
      <span> {props.todo.text}</span>
    </li>
  );
};

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  addTodo() {
    const text = prompt("Todo enter");
    this.setState({
      todos: [...this.state.todos, { id: id++, text: text, checked: false }]
    });
  }

  deleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  checkTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo;
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked
        };
      })
    });
  }

  render() {
    return (
      <div className="App">
        <h4>Total Todos: {Object.keys(this.state.todos).length}</h4>
        <h4>
          Checked Todos: {this.state.todos.filter(todo => todo.checked).length}
        </h4>
        <button onClick={() => this.addTodo()}>Add Todo</button>
        <ul>
          {this.state.todos.map(todo => (
            <Todo
              onChecked={() => this.checkTodo(todo.id)}
              onDelete={() => this.deleteTodo(todo.id)}
              todo={todo}
            />
          ))}
        </ul>
      </div>
    );
  }
}
