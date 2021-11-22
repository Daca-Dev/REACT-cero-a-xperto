import React from 'react'
import { useForm } from '../../hooks/useForm'

export const AddTodo = ({ handleSubmit }) => {

    const [ { description }, hanldeInput, resetForm ] = useForm({ description: ''})

    const submitForm = (e) => {
        e.preventDefault();

        const desc = description.trim();
        if ( description.trim().length === 0 ) return;

        handleSubmit( desc )
        resetForm();
    }

    return (
        <form onSubmit={ submitForm }>
            <h4>Agregar ToDo</h4>
            <hr />
            <input
                className='form-control'
                type='text'
                placeholder='Tarea de ....'
                value={ description }
                onChange={ hanldeInput }
                name='description'
                autoComplete='off'
            />
            <button
                className='btn d-block w-100 btn-warning mt-2'
                type='submit'
            >
                Agregar
            </button>
        </form>
    )
}
