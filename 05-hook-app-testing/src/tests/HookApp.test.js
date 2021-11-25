import React from 'react';
import { shallow } from "enzyme";
import { HookApp } from '../HookApp';


describe('HookApp component test', () => {
    
    test('Debe de renderizar correctamente el componente', () => {
        
        const wrapper = shallow(<HookApp />);
        expect( wrapper ).toMatchSnapshot();

    })
    
})
