import CounterApp from "../CounterApp"

describe('Pruebas en el <counterApp />', () => {
    
    let wrapper = shallow( <CounterApp /> );

    beforeEach( () => {

        console.log('Before each test!');
        wrapper = shallow( <CounterApp /> );

    });


    test('Debe de mostrar el <counterApp /> correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    })
    
    test('Debe de mostrar el valor por defecto de 100', () => {
        const wrapper = shallow( <CounterApp value={ 100 } /> );
        const counterText = wrapper.find( 'h2' ).text().trim();

        expect( counterText ).toBe('100');
    })

    test('Debe de incrementar con el boton +1', () => {

        wrapper.find('button').at(0).simulate('click', {} )
        const counterText = wrapper.find( 'h2' ).text().trim();

        expect( counterText ).toBe('11');

    })

})
