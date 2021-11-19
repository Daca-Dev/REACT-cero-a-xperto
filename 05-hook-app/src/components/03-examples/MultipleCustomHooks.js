import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import './../02-useEffect/form.css';


export const MultipleCustomHook = () => {

    const { state:count, increment } = useCounter( 1 );

    const { loading, data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ count }` );

    const { quote, id, author } = !!data && data[0];
    
    return (
        <>
            <h1>Multiple Custom Hook!</h1>
            <hr />
            {
                loading ?
                (
                    <div className='alert alert-info text-center'>
                        <p className='mb-0'>... Loading</p>
                    </div>
                ) : (
                    <blockquote className='blockquote text-end' key={ id }>
                        <p>{ quote }</p>
                        <footer className='blockquote-footer'>{ author }</footer>
                    </blockquote>
                )

            }
            <button
                className='btn btn-primary'
                onClick={ increment }
            >
                Next quote
            </button>

        </>
    )
}