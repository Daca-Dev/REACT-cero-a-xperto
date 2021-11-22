import React, { useEffect, useReducer } from 'react';
import { AddTodo } from './AddTodo';
import { TodoList } from './TodoList';
import { todoReducer } from './todoRecucer';

import './todos.css';


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
    // return [{
    //     id: Date.now(),
    //     task: 'Terminar el curso de React',
    //     done: false
    // }]
}

export const TodoApp = () => {

    // useReduce
    const [ todos, todoDispatch ] = useReducer( todoReducer, [], init );

    const handleSubmit = ( description ) => {
        
        todoDispatch({
            type: 'add',
            payload: { id: Date.now(), task: description, done: false }
        });
    }

    const deleteTodo = ( todoId ) => {
        const action = {
            type: 'remove',
            payload: todoId
        }

        todoDispatch( action );
    }

    const toggleTodo = ( todoId ) => {
        todoDispatch({
            type: 'toogle',
            payload: todoId
        });
        console.log(todos);
    }

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos) );
    }, [ todos ])

    return (
        <div>
            <h1>Todos List Reducer: ( { todos.length } )</h1>
            <hr />

            <div className='row'>
                <div className='col-8'>
                    <TodoList todos={ todos } deleteTodo={ deleteTodo } toggleTodo={ toggleTodo } />
                </div>
                <div className='col-4'>
                    <AddTodo handleSubmit={ handleSubmit } />
                </div>
            </div>
        </div>
    )
}
