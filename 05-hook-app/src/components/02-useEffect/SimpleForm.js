import React, { useEffect, useState } from 'react';

import './form.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: '',
        email: ''
    })

    const { username, email } = formState;

    // useEffect que solo se ejecuta una vez
    useEffect( () => {
        console.log('Hey!');
    }, [] )

    // useEffect que solo se ejecuta cunado cambia el formState
    useEffect( () => {
        console.log('Cambio en formState!');
    }, [ formState ]);

    // useEffect que solo cambia cuando cambia el email
    useEffect( () => {
        console.log('Cambio en el input de email');
    }, [ email ]);

    const handleOnChange = ( { target } ) => {
        setFormState({
            ...formState,
            [ target.name ]: target.value
        })
    }

    return (
        <>
            <h1>Formulario sencillo</h1>
            <hr />
            <div className="form-control-group mb-3">
                <input 
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="username"
                    value={ username }
                    onChange={ handleOnChange }
                />
            </div>
            <div className="form-control-group mb-3">
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="example@example.com"
                    value={ email }
                    onChange={ handleOnChange }
                />
            </div>
        </>
    );

}