import React, { useState, useCallback } from 'react';

import './../02-useEffect/form.css';
import { ShowIncrement } from './ShowIncrement';


export const CallbackHook = () => {

    const [cont, setCont] = useState( 10 );
    const [show, setShow] = useState( true );

    const procesoPesado = ( iteraciones ) => {

        for (let i = 0; i < iteraciones; i++) {
            console.log('Ahí vamos...');
        }

        return `${ iteraciones } iteraciones realizadas.`;
    }

    const increment = useCallback(
        () => {
            console.log('Aumentamos en 1 :D');
            setCont( c => c + 1);
        },
        [ setCont ],
    )

    return (
        <div>
            <h1>useCallabck Hook</h1>
            <hr />
            <h3>Counter: <small>{ cont }</small> </h3>
            <p>{ procesoPesado }</p>

            <ShowIncrement increment={ increment }/>
            
            <button
                className='btn btn-danger ms-2'
                onClick={ () => setShow( !show ) }
            >
                Show/Hide { JSON.stringify( show) }
            </button>
        </div>
    )
}
