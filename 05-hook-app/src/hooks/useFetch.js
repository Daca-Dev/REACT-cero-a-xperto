import { useState, useEffect, useRef } from 'react';


export const useFetch = ( url ) => {


    const isMount = useRef( true );
    const [ state, setState ] = useState({
        loading: true,
        error: null,
        data: null
    })

    useEffect( () => {
        console.log('Montado');
        return () => {
            isMount.current = false;
            console.log('Desmontado');
        }
    }, [ ] );

    useEffect( () => {

        setState({ loading: true, error: null, data: null })

        fetch( url )
            .then( resp => resp.json() )
            .then( data => {

                setTimeout(() => {
                    if ( isMount.current ) {
                        setState({
                            loading: false,
                            error: null,
                            data
                        })
                    } else {
                        console.log('SetState no llamado');
                    }
                }, 2000);
            })

    }, [ url ])

    return state;
}