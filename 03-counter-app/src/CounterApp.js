import React, { useState } from 'react';
import PropTypes from 'prop-types';


const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState( 0 )

    const handleAdd = (func = 'reset') => {
        switch (func) {
            case 'suma':
                return () => setCounter( counter + 1);
        
            case 'resta':
                return () => setCounter( counter - 1);
        
            default:
                return () => setCounter( value );
        }
    } 

    return (
        <>
            <h1> Counter App </h1>
            <h2> { counter } </h2>

            <button onClick={ handleAdd('suma') }>+1</button>
            <button onClick={ handleAdd() }>Reset</button>
            <button onClick={ handleAdd('resta') }>-1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;