import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counter.css';


export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter( 10 );

    return (
        <>
            <h1 className="text-center">Counter: { state }</h1>
            <hr />
            <div className="d-flex justify-content-center">
                <button onClick={ () => decrement(1) } className="mx-2 btn btn-danger">-1</button>
                <button onClick={ reset } className="mx-2 btn btn-primary">Reset</button>
                <button onClick={ () => increment(1) } className="mx-2 btn btn-success">+1</button>
            </div>

        </>

    )
}