import React from 'react';
import ReactDom from 'react-dom';

import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

import './index.css'

/** HOLA MUNDO BASE
// objeto JSX
const saludo = <h1>Hola mundo</h1>;

// referencia a nuestros punto de entrada en la app
const appRoot = document.querySelector('#root');

// reactDom nos permite ir creando nuestro arbol de componentes
ReactDom.render(saludo, appRoot);
*/
const appRoot = document.querySelector('#root');


// ReactDom.render( <PrimeraApp saludo='Hola, soy Marcus Fenix!' />, appRoot);
// ReactDom.render( <PrimeraApp saludo='Hola mundo!' />, appRoot);
ReactDom.render( <CounterApp value={ 5 }/>, appRoot);

