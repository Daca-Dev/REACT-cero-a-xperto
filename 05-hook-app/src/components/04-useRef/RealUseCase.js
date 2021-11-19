import React, { useState } from 'react';
import { MultipleCustomHook } from '../03-examples/MultipleCustomHooks';


export const RealUseCase = () => {

    const [ show, setShow ] = useState( false );

    return (
        <>
            <h1>Real use case</h1>
            <hr />
            {
                show && (
                    <div className='bg-dark text-light p-3 mb-3'>
                        <MultipleCustomHook />
                    </div>
                )
            }
            <button
                className='btn btn-danger d-block mx-auto'
                onClick={ () => { setShow( !show )} }
            >
                Show / Hide
            </button>
        </>
    )

}