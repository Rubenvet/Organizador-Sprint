import React, { Component } from 'react';
import Todo from './Todo';
import { v4 as uuid } from 'uuid';
import './NewTodoForm.css';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { task: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }


    handleSubmit(evt) {
        evt.preventDefault();
        this.props.createTodo({...this.state, id: uuid(), completed: false })
        this.setState({
            task: "hello"
        });
    }

    render() {
        return (
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                 <label htmlFor="task">Tarea</label>
                <div>
                    <input
                        placeholder="Agregar Tarea"
                        type="text"
                        id="task"
                        name="task"
                        value={this.state.task}
                        onChange={this.handleChange}
                    />
                </div>
                <button>Agregar tarea nueva</button>
                {/* <Todo /> */}
            </form>
        )
    };
}

export default NewTodoForm;