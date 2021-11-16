import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";


describe('Pruebas del archivo 08-imp-exp.js', () => {
    
    test('getHeroeById debe de retornar si pasamos un ID', () => {
        const id = 1;

        const heroe = getHeroeById( id );
        const heroeRef = heroes.find( h => h.id === id );

        expect( heroe ).toEqual( heroeRef );
    })
    
    test('getHeroeById debe de retornar undefine si no existe', () => {
        const id = 10;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined );
    })
    
    test('getHeroesByOwner debe de retornar un arreglo', () => {
        const owner = 'DC';

        const heroes = getHeroesByOwner( owner );
        const heroesRef = heroes.filter( h => h.owner === owner );

        expect( heroes ).toEqual( heroesRef );
    })
    
    test('getHeroesByOwner debe de retornar un arreglo de 2 items', () => {
        
        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 2 );
    })
    
})
