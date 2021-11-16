import React, { useState } from 'react'

import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {

    // se deben de usar useStates para poder cambiar y actualizar los valores de variables en el rende de react
    const [categories, setCategories] = useState( ['Halo Infinity'] );
    
    // const handleAdd = ( event ) => {
    //     // opcion 1
    //     setCategories( [...categories, 'Battlefield'] );
    //     // opcion 2
    //     // setCategories( cats => [...cats, 'Battlefield'] );
    // }

        return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={ setCategories }/>

            <hr />

            {/* uno de los eventos es onClick y este recibe una referencia a una función a la cual le pasa el parametro de evento */}
            {/* <button onClick={ handleAdd }>Agregar</button> */}

            <div>
                {/* para renderizar componentes o items HTML debemos de usar funciones que retornen algo */}
                {/* cuadno se renderiza una lista en react, esta coloca cada elemento separado por un salto de linea */}
                {
                    categories.map( category =>
                    <GifGrid
                        key={ category }
                        category={ category }
                    />
                    )
                }
            </div>
        </>
    )
}

export default GifExpertApp
