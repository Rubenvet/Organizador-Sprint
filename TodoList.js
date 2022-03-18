import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import "./TodoList.css";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: []
        };
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }

    create(newTodo) {
        this.setState({
            todo: [...this.state.todo, newTodo]
        })
    }

    remove(id) {
        this.setState({
            todo: this.state.todo.filter(t => t.id !== id)
        });
    }

    

    update(id, updatedTask) {
        const updatedTodos = this.state.todo.map(todos => {
            if (todos.id === id) {
                return { ...todos, task: updatedTask }
            }
            return todos;
        });
        this.setState({ todo: updatedTodos })
    }

    toggleCompletion(id) {
        const updatedTodos = this.state.todo.map(todos => {
            if (todos.id === id) {
                return { ...todos, completed: !todos.completed }
            }
            return todos;
        });
        this.setState({ todo: updatedTodos });
    }


    render() {
        const tasks = this.state.todo.map(todos => {
            return (
                <Todo
                key={todos.id}
                id={todos.id}
                task={todos.task}
                completed={todos.completed}
                removeTodo={this.remove}
                updateTodo={this.update}
                toggleTodo={this.toggleCompletion}
            />
            );
        });

        return (
            <div className="TodoList">
                <h1>Sprint!<span>Trabajo Sprint backlog</span> <span>Alumno:Rubén Robles Velázquez</span><span>Matrícula: 221968501</span></h1>
                <ul>{tasks}</ul>
                <NewTodoForm createTodo={this.create} />
            </div>
        );
    }
}


export default TodoList;
