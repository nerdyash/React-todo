import React, { Component } from 'react';
import propTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ''
    }
    submit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''})
    }
    change = (e) => this.setState({[e.target.name]: e.target.value});
    render() {
        return (
            <form style={form} onSubmit={this.submit}>
                <input type='text' name='title' placeholder='Add Todo...' style={title} value={this.state.title} onChange={this.change}/>
                <input type='submit' value='Add' className='btn' style={submit}/>
            </form>
        )
    }
}
const form = {
    display: 'flex'
}

const title = {
    flex: '10',
    padding: '5px'
}

const submit = {
    flex: '1'
}

AddTodo.propTypes = {
    addTodo: propTypes.func.isRequired
}

export default AddTodo
