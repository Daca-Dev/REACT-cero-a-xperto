import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

import './../02-useEffect/form.css';

export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );

    // const increment = () =>{
    //     setCounter( c => c + 1);
    // }

    const increment = useCallback( () => {
        setCounter( c => c + 1);
    }, [ setCounter ] )

    return (
        <>
            <h1>UseCallback</h1>
            <hr />

            <h2>Counter: { counter }</h2>
            <ShowIncrement increment={ increment }/>
        </>
    )
}
