import React, { useState, useMemo } from 'react'
import { useCounter } from '../../hooks/useCounter'

import './../02-useEffect/form.css'

export const UseMemo = () => {

    const { state, increment } = useCounter( 5000 );
    const [show, setShow] = useState( true );

    const procesoPesado = ( iteraciones ) => {

        for (let i = 0; i < iteraciones; i++) {
            console.log('Ahí vamos...');
        }

        return `${ iteraciones } iteraciones realizadas.`;
    }

    const memoProcesoPesado = useMemo(() => procesoPesado( state ), [state])

    return (
        <div>
            <h1>useMemo</h1>
            <hr />
            <h3>Counter: <small>{ state }</small> </h3>
            <p>{ memoProcesoPesado }</p>
            <button
                className='btn btn-primary'
                onClick={ () => {
                    console.log('Aumentamos en 1 :D');
                    increment();
                } }
            >
                +1
            </button>
            <button
                className='btn btn-danger ms-2'
                onClick={ () => setShow( !show ) }
            >
                Show/Hide { JSON.stringify( show) }
            </button>
        </div>
    )
}
