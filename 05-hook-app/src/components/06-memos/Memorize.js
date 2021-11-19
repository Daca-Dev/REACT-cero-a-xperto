import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'

import './../02-useEffect/form.css'
import { Small } from './Small';

export const Memorize = () => {

    const { state, increment } = useCounter( 10 );
    const [show, setShow] = useState( true );  

    return (
        <div>
            <h1>Memorize</h1>
            <hr />
            <h3>Counter: <Small value={ state } />  </h3>
            <button
                className='btn btn-primary'
                onClick={ increment }
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
