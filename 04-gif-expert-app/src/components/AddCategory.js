import React, { useState } from 'react';
import PropTypes from 'prop-types'


const AddCategory = ({ setCategories }) => {


    // se deben de usar useStates para poder cambiar y actualizar los valores de variables en el rende de react
    const [inputValue, setInputValue] = useState('');

    const handleInput = (event) => {

        setInputValue( event.target.value );

    }

    const handleSubmit = (event) => {
        /** manejar el evento de submit (presionar enter) en el formulario */
        // evita que el formulario recargue la página, esto ya no se debería aher así
        event.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            // uso de la función pasada en los proptypes por medio de un callback
            setCategories( c => [ inputValue, ...c,] );
            setInputValue('');
        }
        
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInput }
                placeholder='Ingrese un texto de búsqueda...'
            />
        </form>
    )
}

// configuracion de los proptypes
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


export default AddCategory
