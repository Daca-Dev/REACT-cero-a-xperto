import { getUser, getUsuarioActivo } from "../../base/05-funciones"



describe('Pruebas del archivo 05-funciones.js', () => {

    test('prueba de getUser', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        expect( user ).toEqual( userTest );
    })

    test('prueba de getUsuarioActivo', () => {

        const nombre = 'David';

        const userTest = {
            uid: 'ABC567',
            username: nombre
        };

        const user = getUsuarioActivo( nombre );
        expect( user ).toEqual( userTest );
    })
})