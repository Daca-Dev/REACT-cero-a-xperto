import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";


describe('Pruebas del componente <GifGridItem />', () => {

    const title = 'Hola mundo';
    const url = 'https://localhost/algo.png';
    const wrapper = shallow( <GifGridItem title={ title } url={ url }/>);
    
    test('Debe de mostrar el componente correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    })

    test('Debe de haber un parrafo con el contenido de title', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    })
    
    test('Debe de contener una imagen con la url', () => {
        const img = wrapper.find('img');
        // metodos para acceder a las propiedades del elemento
        // console.log( img.props());
        // console.log( img.prop('src'));
        expect( img.prop('src') ).toBe( url );
    })
    
    test('El contenedor principal debe de tener la clase animate__fadeIn', () => {
        const div = wrapper.find('div');
        // console.log(div.props());
        expect( div.prop('className').includes('animate__fadeIn') ).toBe( true );
        expect( div.prop('className').includes('animate__fadeIn') ).not.toBe( false );
    })
    
})
