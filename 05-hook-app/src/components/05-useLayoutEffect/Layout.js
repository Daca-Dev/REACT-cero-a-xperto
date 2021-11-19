import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import './layout.css';


export const Layout = () => {

    const { state:count, increment } = useCounter( 1 );
    const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ count }` );
    const { quote, id, author } = !!data && data[0];
    
    const [boxSize, setBoxSize] = useState({});

    const pTag = useRef();


    useLayoutEffect( () => {
        console.log('Hey!');
        setBoxSize( pTag.current.getBoundingClientRect() );

    }, [ quote ])

    return (
        <>
            <h1>useLayput Hook</h1>
            <hr />
            
            <blockquote className='blockquote text-end' key={ id }>
                <p ref={ pTag }>{ quote }</p>
                <footer className='blockquote-footer'>{ author }</footer>
            </blockquote>

            <pre>
                { JSON.stringify( boxSize, null, 3 ) }
            </pre>
            
            <button
                className='btn btn-primary'
                onClick={ increment }
            >
                Next quote
            </button>

        </>
    )
}