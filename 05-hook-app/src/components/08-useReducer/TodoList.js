import React from 'react';
import PropTypes from 'prop-types';
import { TodoListItem } from './TodoItem';

export const TodoList = ({ todos, toggleTodo,deleteTodo }) => {
    return (
        <ul className='list-group list-group-flush'>
                {
                    todos.map( (t, i) => (
                        <TodoListItem
                            todo={t}
                            deleteTodo={ deleteTodo }
                            toggleTodo={ toggleTodo }
                            id={ i }
                        />
                    ))
                }
            </ul>
    )
}

TodoList.porpTypes = {
    todos: PropTypes.array.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}
