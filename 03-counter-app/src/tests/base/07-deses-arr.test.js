import { retornaArreglo } from "../../base/07-deses-arr";



describe('Pruebas del archivo 07-deses-arr.js', () => {

    test('retornaArreglo debe de retornar un número y string', () => {

        const [ letras, numeros ] = retornaArreglo();

        expect( letras ).toBe( 'ABC' );
        expect( typeof letras ).toBe( 'string' );

        expect( numeros ).toBe( 123 );
        expect( typeof numeros ).toBe( 'number' );

    })

});