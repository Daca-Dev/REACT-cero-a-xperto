import React, { useState } from 'react';

import './counter.css';

export const CounterApp = () => {

    const [ counter , setCounter] = useState({
        cont1: 0,
        cont2: 20
    });

    const { cont1, cont2 } = counter;

    return (
        <>
            <h1>Counter 1: { cont1 } </h1>
            <h1>Counter 2: { cont2 } </h1>
            <hr />

            <button
                className="btn btn-success"
                onClick={ () => {
                    setCounter({
                        ...counter ,
                        cont1: cont1 + 1
                    })
                }}
            >
                +1
            </button>
        </>
    )
}