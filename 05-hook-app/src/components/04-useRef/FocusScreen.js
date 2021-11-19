import React, { useRef } from 'react';

import './../02-useEffect/form.css';

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        console.log('Referencia seleccionada');
        inputRef.current.select();
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />
            <div className='form-control-group mb-3'>
                <input 
                    ref={ inputRef }
                    className='form-control'
                    placeholder='username'
                    type='texto'
                />
            </div>
            <button
                className='btn btn-warning'
                onClick={ handleClick }
            >
                Focus
            </button>
        </>
    )

}
