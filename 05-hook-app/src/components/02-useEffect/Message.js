import React, { useEffect, useState } from 'react';


export const Message = () => {

    const [ coords, setCoords ] = useState({x:0, y:0});
    const { x, y } = coords;

    useEffect(() => {
        
        const mouseMove = ( event ) => {
            const coords = { x: event.x, y: event.y };
            setCoords( coords );
        }
        
        window.addEventListener( 'mousemove', mouseMove );

        console.log('Componente montado :D');
        return () => {
            console.log('Componente desmontado :(');
            window.removeEventListener('mousemove', mouseMove );
        }
    }, [ ])

    return (
        <>
            <h1>Eres genial!</h1>
            <p>Coords - x: { x } | y: { y }</p>
        </>
    )

}