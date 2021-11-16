import { getImagen } from "../../base/11-async-await"

describe('Pruebas sobre el archivo 11-async-await.js', () => {
    
    test('returna valid url', async() => {
        
        const url = await getImagen();

        expect( url.includes( 'http' ) ).toBe( true );

    })

})
