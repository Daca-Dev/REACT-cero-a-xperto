/** unico archivo que no tendrá su analogo de codigio JS */


describe('Agrupación de pruebas', () => {
    // hola mundo de una prueba
    test( 'Deben de ser iguales los strings', () => {
    
        // 1. inicialización
        const mensaje = 'Hola mundo';
    
        // 2. estimulo
        const mensaje2 = `Hola mundo`;
    
        // Observar el comportamiento
        expect( mensaje ).toBe( mensaje2 );
    
    });
})
