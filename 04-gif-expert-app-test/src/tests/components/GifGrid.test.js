import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');



describe('Pruebas del componente <GifGrid />', () => {
    
    const category = 'halo';

    test('El componente debe de renderizar correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category={ category } />);
        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
        // simular la data que recibe

        const gif = [{
            id:'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualqueri cosa'
        }]

        useFetchGifs.mockReturnValue({
            data: gif,
            loading: false
        });
        
        const wrapper = shallow( <GifGrid category={ category } />);
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find( 'GifGridItem' ).length ).toBe( gif.length );

    })
    

})
