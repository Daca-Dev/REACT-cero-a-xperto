import { useFetchGifs } from "../../hooks/useFetchGifs"
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas del Custom Hook useFetchGifs', () => {
    
    test('Debe de retornar el estado inicial', async() => {
        
        // const { data, loading} = useFetchGifs( 'halo' );
        const { result, waitForNextUpdate } = renderHook( () =>  useFetchGifs( 'halo ') );
        const { data, loading } = result.current;
        
        await waitForNextUpdate();
        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );
    })

    test('Debe de retornar un arreglo de imagenes y el loading en falso', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () =>  useFetchGifs( 'halo ') );
        
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );

    })
    
    
})
