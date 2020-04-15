import React from 'react';
import TodoItem from '../todoItem/todoItem';

class TodoList extends React.Component {

    render() {

        const todos = this.props.todos;

        return(
            <div className='todoListContainer'>
                {
                    todos.map((_todo, _index) => {
                        return(
                            <TodoItem updateTodoFunction={this.updateTodo} key={_index} todo={_todo}></TodoItem>
                        )
                    })
                }
            </div>
        );
    }

    updateTodo = (todo) => {
        this.props.updateTodoFunction(todo);
    }
}

export default TodoList;