import React, { useEffect }  from 'react';
import { useForm } from '../../hooks/useForm';

import './form.css';

export const FormWithCustomHook = () => {

    const [ formState, handleOnChange ] = useForm({
        username: '',
        email: '',
        password: ''
    })
    
    const { username, email, password } = formState;

    useEffect( () => {
        console.log('Contraseña cambiada :P');
    }, [ password ])
        
    return (
        <form>
            <h1>Formulario sencillo</h1>
            <hr />
            <div className="form-control-group mb-3">
                <input 
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="username"
                    autoComplete='false'
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
                    autoComplete='false'
                    value={ email }
                    onChange={ handleOnChange }
                />
            </div>
            <div className="form-control-group mb-3">
                <input 
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="example@example.com"
                    value={ password }
                    onChange={ handleOnChange }
                />
            </div>
        </form>
    );

}