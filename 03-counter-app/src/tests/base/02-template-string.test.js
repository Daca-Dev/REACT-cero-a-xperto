import { getSaludo } from "../../base/02-template-string";


describe('Pruebas del archivo 02-template-string.js', () => {

    const nombre = 'Jefe Maestro';

    test('getSaludo sin argumentos debe de retornar Hola David', () => {

        const saludo = getSaludo();

        expect( saludo ).toBe( 'Hola David');

    })

    test('getSaludo con argumentos debe de retornar Hola Jefe Maestro', () => {

        const saludo = getSaludo( nombre );

        expect( saludo ).toBe( 'Hola ' + nombre);

    })


})