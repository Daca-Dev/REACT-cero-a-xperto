import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";


describe('Pruebas del archivo 09-promesas', () => {
    
    test('prueba asincrona de getHeroeByIdAsync', ( done ) => {
        
        const id = 1;

        getHeroeByIdAsync( id )
            .then( h => {
                

                expect( h ).toEqual( heroes[0] )
                done();

            })
        
    })
    
    test('prueba asincrona de getHeroeByIdAsync con id no encontrado', ( done ) => {
        
        const id = 10;

        getHeroeByIdAsync( id )
            .catch( error => {
                
                expect( error ).toBe( 'No se pudo encontrar el héroe' );
                done();

            })
        
    })
    
})
