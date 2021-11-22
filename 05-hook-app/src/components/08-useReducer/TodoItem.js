import React from 'react';
import PropTypes from 'prop-types';

export const TodoListItem = ({ todo, id, toggleTodo, deleteTodo }) => {
    return (
        <li 
            className='list-group-item d-flex justify-content-between align-items-center'
            key={ todo.id }
        >
            <p
                className={ `${ todo.done && 'text-decoration-line-through' }` }
                onClick={ () => toggleTodo( todo.id ) }
                role="button"
            >
                { id + 1}. { todo.task }
            </p>
            <button
                className='btn btn-danger'
                onClick={ () => deleteTodo( todo.id ) }
            >
                Borrar
            </button>
        </li>
)}


TodoListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}