import React from 'react';
// import { render } from '@testing-library/react';
import PrimeraApp from "../PrimeraApp";

import { shallow } from '@wojtekmaj/enzyme-adapter-react-17';


describe('test of <PrimeraApp />', () => {
    
    // test('Search for a message', () => {
    //     const saludo = 'Hola! soy David Casas'; 
    //     // obtine un metodo del wrapper
    //     // const wrapper = render( <PrimeraApp saludo={ saludo }/> );
    //     const { getByText } = render( <PrimeraApp saludo={ saludo }/> );
    //     expect( getByText( saludo ) ).toBeInTheDocument();
    // })
    

    test('The render of <PrimeraApp /> its correct', () => {
        
        const saludo = 'Hola, Soy David';
        const wrapper = shallow( <PrimeraApp saludo={ saludo } /> );

        expect( wrapper ).toMatchSnapshot();

    })
    

})
