import React from 'react';
import './style.css';

class TodoItem extends React.Component {

    render() {

        const todo = this.props.todo;

        return(
            <div className={'todoItem' + (todo.completed ? ' completed' : '')} onClick={this.crossTodo}>
                {todo.text}
            </div>
        );
    }

    crossTodo = () => {
        this.props.updateTodoFunction(this.props.todo);
    }
}

export default TodoItem;