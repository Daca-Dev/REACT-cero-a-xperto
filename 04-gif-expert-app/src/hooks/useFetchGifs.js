import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {
    
    const [ state, setState ] = useState({
        data: [], loading: true
    })

    // use efect es usado para controlar cunado se deben de ejcutar piezas de código cuando
    // se renderizan los componentes cada vez que hay un cambio
    useEffect( () => {

        getGifs( category )
            .then( imgs => {
                setTimeout(() => {
                    setState({
                        data: imgs,
                        loading: false
                    });
                }, 2000);
            })
            .catch( err => console.log( err ));
    }, [ ]);

    return state
}



