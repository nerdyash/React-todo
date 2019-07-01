import React, { Component } from 'react';
import propTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type='checkbox' onChange={this.props.markComplete.bind(this, id)}/> { '  ' }
                    {title}
                    <button style={btnStyle} onClick={this.props.deleteTodo.bind(this, id)}>X</button>
                </p>
            </div>
        )
    }
}
// Prop-Types
TodoItem.propTypes = {
    todo: propTypes.object.isRequired,
    markComplete: propTypes.func.isRequired,
    deleteTodo: propTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    fontWeight: '500',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
    border: 'none'
}

export default TodoItem;