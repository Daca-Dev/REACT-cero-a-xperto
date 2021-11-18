
import React from 'react';
import { shallow } from '@wojtekmaj/enzyme-adapter-react-17';
import { GifGridItem } from '../../components/GifGridItem';


describe('Pruebas en <GifgridItem />', () => {

    test('Debe de mostrar el componente correctamente', ( () => {

        const wrapper = shallow( <GifGridItem />);
        expect( wrapper ).toMatchSnapshot();
    }))
})