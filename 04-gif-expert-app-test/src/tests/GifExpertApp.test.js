import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';


describe('Pruebas del componente <GifExpertApp />', () => {
    
    test('Debe de renderizarce correctamente', () => {
        
        const wrapper = shallow( <GifExpertApp />);
        expect( wrapper ).toMatchSnapshot();

    })
    
    test('Debe de renderizar las categorias', () => {
        const categories = ['halo', 'gears of war'];

        const wrapper = shallow( <GifExpertApp defaultCategories={ categories } />);
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    })
    

})
