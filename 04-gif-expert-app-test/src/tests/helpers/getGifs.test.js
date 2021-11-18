import { getGifs } from "../../helpers/getGifs";

describe('Pruebas de getGifs fetch', () => {
    
    test('Debe de trare 10 elementos', async() => {
        const search = 'Halo';
        const resp = await getGifs( search );
        
        expect( resp.length ).toBe( 10 );
    })
    
    test('Debe de trare 0 elementos con una busqueda vacia', async() => {
        const search = '';
        const resp = await getGifs( search );
        
        expect( resp.length ).toBe( 0 );
    })
    
})
