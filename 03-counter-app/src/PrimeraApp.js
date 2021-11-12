import React from 'react';
import PropTypes from 'prop-types';
// import React, { Fragment } from 'react';


// functional Component FC
// const PrimeraApp = ( props ) => {
const PrimeraApp = ( {
    saludo,
    subtitulo = 'Subtitulo (forma default 1)',
    piePagina
} ) => {

    // forma comun
    // return (
    //     <Fragment>
    //         <h1>Hola mundo!</h1>
    //         <p>Soy David Casas y estoy aprendiendo React</p>
    //     </Fragment>
    // );

    // forma reducida

    // const saludo = 'Hola mundo!'

    return (
        <>
            <h1> { saludo } </h1>
            <p> { subtitulo } </p>
            <p>Soy David Casas y estoy aprendiendo React</p>
            <small>{ piePagina }</small>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    piePagina: 'pie de pagina (forma default 2)'
}


export default PrimeraApp;